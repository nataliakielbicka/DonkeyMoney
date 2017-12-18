public with sharing class deleteExpense {
	
	@AuraEnabled
	public static Expense__c deleteExpense(Expense__c expense) {
	    // Perform isDeletable() check here 
	    delete expense;
	    return expense;
	}
}