({
    doInit : function(component, event, helper) {
        var mydate = component.get("v.expense.CreatedAt__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
})