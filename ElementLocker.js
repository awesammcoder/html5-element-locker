class ElementLocker {
    constructor(element, attributes, callback){
        this.element = element;
        this.attributes = attributes;
        this.callback = callback;
    }

    lock(){
        this.original_attributes = [];
        for(var i=0; i < this.attributes.length; i++){
            this.original_attributes[this.attributes[i]] = this.element[this.attributes[i]];
        }

        this.bindListener();
    }

    bindListener(){
        var _this = this;

        new Promise(function(resolve, reject){
            setTimeout(function(){
                var haschanged = false;

                for(var j=0; j < _this.attributes.length; j++){
                    if(_this.original_attributes[_this.attributes[j]] != _this.element[_this.attributes[j]]){
                        haschanged = true;
                        _this.element[_this.attributes[j]] = _this.original_attributes[_this.attributes[j]];
                    }
                }
                if(haschanged){
                    reject();
                }else{
                    resolve();
                }
            }, 100);
        }).then(function(){
            _this.lock();
        }).catch(function(){
            if(_this.callback){
                _this.callback();
            }                    
            _this.lock();
        });
    }
}