({
    doInit : function(component, event, helper) {
        var mydate = component.get("v.expense.CreatedAt__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
    delete : function(component, evt, helper) {
	    var expense = component.get("v.expense");    
	    var deleteEvent = component.getEvent("deleteExpenseItem");
	    console.log(expense)
	    deleteEvent.setParams({ "expense": expense }).fire();
		}
})