

/*****************************
 Viewmodel for Franchise Sets
******************************/


var FranchiseSetViewModel = {		
	showSetGrid: ko.observable(true),
	showSelectSet: ko.observable(),
	flash: ko.observable(),
	shownOnce: ko.observable(),
	currentPage: ko.observable(),
	errors: ko.observableArray(),
	franchiseSets: ko.observableArray(),
	availableCountries: ko.observableArray(['United States', 'Canada']),
 	availableTimeZones: ko.observableArray(['Eastern', 'Central', 'Mountain', 'Pacific']),
 	availableTemperatures: ko.observableArray(['Fahrenheit', 'Celsius']),
	selectedFranchiseSet: ko.observable().publishOn("franchise_set_id"),
	tempFranchiseSet: {
		id:          		ko.observable(),
		set_name:    		ko.observable(),
		set_num:     		ko.observable(),
		soa_num:     		ko.observable(),
		address:     		ko.observable(),
		time_zone:   		ko.observable(),
		country:  			ko.observable(),
		temperature: 		ko.observable(),
		created_at:  		ko.observable(),
		updated_at:  		ko.observable()
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
	
		
	
	clearTempFranchiseSet: function() {		
		this.tempFranchiseSet.id('');
		this.tempFranchiseSet.set_name('');
		this.tempFranchiseSet.set_num('');
		this.tempFranchiseSet.soa_num('');
		this.tempFranchiseSet.address('');
		this.tempFranchiseSet.time_zone('');
		this.tempFranchiseSet.country('');
		this.tempFranchiseSet.temperature('');
		this.tempFranchiseSet.created_at('');
		this.tempFranchiseSet.updated_at('');
		
	},
	
	
	prepareTempFranchiseSet: function() {
		this.tempFranchiseSet.id(ko.utils.unwrapObservable(this.selectedFranchiseSet().id));
		this.tempFranchiseSet.set_name(ko.utils.unwrapObservable(this.selectedFranchiseSet().set_name));
		this.tempFranchiseSet.set_num(ko.utils.unwrapObservable(this.selectedFranchiseSet().set_num));
		//console.log(this.tempFranchiseSet.set_num(ko.utils.unwrapObservable(this.selectedFranchiseSet().set_num)))
		this.tempFranchiseSet.soa_num(ko.utils.unwrapObservable(this.selectedFranchiseSet().soa_num));
		this.tempFranchiseSet.address(ko.utils.unwrapObservable(this.selectedFranchiseSet().address));
		this.tempFranchiseSet.time_zone(ko.utils.unwrapObservable(this.selectedFranchiseSet().time_zone));
		this.tempFranchiseSet.country(ko.utils.unwrapObservable(this.selectedFranchiseSet().country));
		//console.log(this.tempFranchiseSet.country(ko.utils.unwrapObservable(this.selectedFranchiseSet().country)))
		this.tempFranchiseSet.temperature(ko.utils.unwrapObservable(this.selectedFranchiseSet().temperature));
		this.tempFranchiseSet.created_at(ko.utils.unwrapObservable(this.selectedFranchiseSet().created_at));
		this.tempFranchiseSet.updated_at(ko.utils.unwrapObservable(this.selectedFranchiseSet().updated_at));
	},
		
	
	
	indexAction: function() {		
		this.showSelectSet(true);
		this.showSetGrid(true);
		this.checkFlash();
		
		
		
				
		$.getJSON('/franchise_sets', function(data) {
			FranchiseSetViewModel.franchiseSets(data);
			FranchiseSetViewModel.currentPage('index');
			FranchiseSetViewModel.shownOnce(true);
			
			
		});
		
	},
	
	
	showAction: function(itemToShow) {
		
	},
	
	
	newAction: function() {
		this.clearTempFranchiseSet();
		this.showSetGrid(false);
		this.showSelectSet(false);
		this.checkFlash();
		this.currentPage('new');		
		this.shownOnce(true);
		//$(".alert").alert('close')
		
	},
	
	
	 createAction: function(itemToCreate) {
	 	
	    var json_data = itemToCreate;
	    
	    //console.log(json_data)
	    
	    $.ajax({
	      type: 'POST',
	      url: '/franchise_sets',
	      dataType: "json",
	      data: {
	      	franchise_set: json_data
	      },	     
	      success: function(createdItem) {
	        FranchiseSetViewModel.errors([]);
	        FranchiseSetViewModel.setFlash('Franchise Set successfully created.');
	        FranchiseSetViewModel.clearTempFranchiseSet();
	        FranchiseSetViewModel.indexAction(); // redirect to Franchise Set list
	        FranchiseSetViewModel.checkFlash();
	        	        
	      },
	      error: function(msg) {
	        //FranchiseSetViewModel.errors(JSON.parse(msg.responseText));
	      }
	    });
	    
	  },
	  
	  
	  

	 editAction: function(itemToEdit) {
	 	//console.log(itemToEdit)
	    this.checkFlash();
	    this.showSelectSet(false);
	    this.selectedFranchiseSet(itemToEdit);
	    this.selectedFranchiseSet();
	    //console.log(this.selectedFranchiseSet().id)
	    this.prepareTempFranchiseSet();
	    this.currentPage('edit');
	    this.shownOnce(true);
	    FranchiseViewModel.franchiseIndexAction();
	    
	  },
	  
	  
	  
	  
	updateAction: function(itemToUpdate) {
		var json_data = itemToUpdate;
		//delete json_data.id;
		//delete json_data.created_at;
		//delete json_data.updated_at;
		
		//console.log(itemToUpdate)
 
		$.ajax({
			type: 'PUT',
			url: '/franchise_sets/' + itemToUpdate.id(),
			dataType: "json",
			data: {
			  franchise_set: json_data
			},			
			success: function(updatedItem) {
				FranchiseSetViewModel.errors([]);
				FranchiseSetViewModel.setFlash('Franchise Set successfully updated.');
				FranchiseSetViewModel.indexAction();
			},
			error: function(msg) {
				FranchiseSetViewModel.errors(JSON.parse(msg.responseText));
				}
		});
	},


	
	
	destroyAction: function(setToDestroy) {
		if (confirm("Are you sure?")) {
			$.ajax({
				type: 'DELETE',
				url: '/franchise_sets/' + setToDestroy.id,
				dataType: 'json',
				success: function() {
					FranchiseSetViewModel.errors([]);
					FranchiseSetViewModel.setFlash('Franchise Set successfully deleted');
					FranchiseSetViewModel.indexAction();
										
				},
				error: function(msg) {
					FranchiseSetViewModel.errors(JSON.parse(msg.responseText));
				} 
			})
		}
	},
	
	
	
	
	
	
	
}; // End of FranchiseSetViewModel




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



