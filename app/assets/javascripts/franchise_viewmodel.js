

/*******************************************
 Viewmodel for Franchises Belonging to Sets
********************************************/


var FranchiseViewModel = {	
	franchiseSetId: ko.observable().subscribeTo("franchise_set_id"),	
	showSetGrid: ko.observable(true),
	showSelectSet: ko.observable(),
	flash: ko.observable(),
	shownOnce: ko.observable(),
	currentPage: ko.observable(),
	errors: ko.observableArray(),
	franchises: ko.observableArray(),
	selectedFranchise: ko.observable(),
	tempFranchise: {
		id:          			ko.observable(),
		franchise_name:    	ko.observable(),
		franchise_num:			ko.observable(),
		franchise_set_id:		ko.observable(),
		created_at:  			ko.observable(),
		updated_at:  			ko.observable()
	},
		
	setFlash: function(flash) {
		this.flash(flash);
		this.shownOnce(false);
		$(".alert").alert();
	},
	
	checkFlash: function() {
		if (this.shownOnce() == true) {
			this.flash('');
			$(".alert").alert('close');
		}
	},
	
		
	
	clearTempFranchise: function() {
		this.tempFranchise.id('');
		this.tempFranchise.franchise_name('');
		this.tempFranchise.franchise_num('');
		this.tempFranchise.franchise_set_id('');
		this.tempFranchise.created_at('');
		this.tempFranchise.updated_at('');
		
	},
	
	
	prepareTempFranchise: function() {
		this.tempFranchise.id(ko.utils.unwrapObservable(this.selectedFranchise().id));
		this.tempFranchise.franchise_name(ko.utils.unwrapObservable(this.selectedFranchise().franchise_name));
		this.tempFranchise.franchise_num(ko.utils.unwrapObservable(this.selectedFranchise().franchise_num));
		this.tempFranchise.franchise_set_id(ko.utils.unwrapObservable(this.selectedFranchise().franchise_set_id))
		this.tempFranchise.created_at(ko.utils.unwrapObservable(this.selectedFranchise().created_at));
		this.tempFranchise.updated_at(ko.utils.unwrapObservable(this.selectedFranchise().updated_at));
	},
		
	
	clickTest: function() {
		var object = this.franchiseSetId();
		return object.id;
	},
	
	franchiseIndexAction: function() {	
		
		//this.showSelectSet(true);
		//this.showSetGrid(true);
		//this.checkFlash();
		
		//console.log(this.franchiseSetId().id);
		
		var id = this.franchiseSetId().id;
						
		$.getJSON('/franchise_sets/' + id + '/franchises', function(data) {
			FranchiseViewModel.franchises(data);
			FranchiseViewModel.currentPage('index');
			FranchiseViewModel.shownOnce(true);
			//console.log(data);	
			
					
		});
		
	},
	
	
	showAction: function(itemToShow) {
		
	},
	
	
	newAction: function() {
		//this.showSetGrid(false);
		//this.showSelectSet(false);
		this.checkFlash();
		//this.currentPage('new');
		this.clearTempFranchise();
		this.shownOnce(true);
		//$(".alert").alert('close')
		
		
		
	},
	
	
	 createAction: function(itemToCreate) {
	 	
	    var json_data = itemToCreate;	
	    var id = this.franchiseSetId().id;    
	      
	    $.ajax({
	      type: 'POST',
	      url: '/franchise_sets/' + id + '/franchises',
	      dataType: "json",
	      data: {
	      	franchise: json_data
	      },	     
	      success: function(createdItem) {
	        FranchiseViewModel.errors([]);
	        FranchiseViewModel.setFlash('Franchise Set successfully created.');
	        FranchiseViewModel.clearTempFranchise();
	        FranchiseViewModel.franchiseIndexAction(); // refresh franchises
	        FranchiseViewModel.checkFlash();
	        
	        	        
	      },
	      error: function(msg) {
	        //FranchiseViewModel.errors(JSON.parse(msg.responseText));
	      }
	    });
	    
	    this.franchiseIndexAction();
	  },
	  
	  
	  

	 franchiseEditAction: function(itemToEdit) {	 	
	 	//console.log(itemToEdit)	 	
	    this.checkFlash();
	    this.showSelectSet(false);
	    this.selectedFranchise(itemToEdit);
	    //console.log(this.selectedFranchise())
	    this.prepareTempFranchise();
	    this.currentPage('edit');
	    this.shownOnce(true);
	    
	  },
	  
	  
	  
	  
	franchiseUpdateAction: function(franchiseToUpdate) {
		var json_data = franchiseToUpdate;
		//delete json_data.id;
		//delete json_data.created_at;
		//delete json_data.updated_at;
		
		var id = this.franchiseSetId().id; 		
 
		$.ajax({
			type: 'PUT',
			url: '/franchise_sets/' + id + '/franchises/' + franchiseToUpdate.id(),
			dataType: "json",
			data: {
			  franchise: json_data
			},			
			success: function(updatedItem) {
				FranchiseViewModel.errors([]);
				FranchiseViewModel.setFlash('Franchise successfully updated.');
				FranchiseViewModel.franchiseIndexAction();
			},
			error: function(msg) {
				FranchiseViewModel.errors(JSON.parse(msg.responseText));
				}
		});
	},


	
	
	franchiseDestroyAction: function(franchiseToDestroy) {
		
		var id = this.franchiseSetId().id; 				
		
		if (confirm("Are you sure?")) {
			$.ajax({
				type: 'DELETE',
				url: '/franchise_sets/' + id + '/franchises/' + franchiseToDestroy.id ,
				dataType: 'json',
				success: function() {
					FranchiseViewModel.errors([]);
					FranchiseViewModel.setFlash('Franchise successfully deleted');
					FranchiseViewModel.franchiseIndexAction();
										
				},
				error: function(msg) {
					FranchiseViewModel.errors(JSON.parse(msg.responseText));
				} 
			})
		}
	},


	

	
}; // End of Franchises View Model



	 
ko.postbox.subscribe("franchise_set_id", function(newValue) {
        FranchiseViewModel.franchiseSetId(newValue);
    }, this)



// JQuery fade-in when row object is added or removed
ko.bindingHandlers.rowFadeIn = {
	    init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
	        // This will be called when the binding is first applied to an element
	        // Set up any initial state, event handlers, etc. here
	        $(element).hide();

	    },
	    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
	        // This will be called once when the binding is first applied to an element,
	        // and again whenever the associated observable changes value.
	        // Update the DOM element based on the supplied values here.

				// First get the latest data that we're bound to
	     		var value = valueAccessor(), allBindings = allBindingsAccessor();

	    		// Next, whether or not the supplied model property is observable, get its current value
	     		var valueUnwrapped = ko.utils.unwrapObservable(value); 

	    		if (valueUnwrapped == true) 
	         	$(element).fadeIn("fast"); // Make the element visible

		    	}
		};
