import { LightningElement, track } from 'lwc';

export default class CopyAddressCmp extends LightningElement {

    @track add1;
    @track add2;
    @track lmark;
    @track zipcode;
   
    handleChange(event){        
        var checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
        if(event.target.checked==true){
            var inp=this.template.querySelectorAll("lightning-input");
            inp.forEach(function(element){               
                if(element.name=="input31"){
                    this.add1=element.value;                     
                }
                else if(element.name=="input3"){
                    this.lmark=element.value; 
                }
                else if(element.name=="input4"){
                    this.zipcode=element.value; 
                }                    
                else if(element.name=="input2")
                    this.add2=element.value;
            },this);
        }

       
    }


}

