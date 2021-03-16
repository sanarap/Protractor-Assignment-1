describe('Admin user creation', function () {
	it('should login with admin credentials', function () {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
		browser.ignoreSynchronizaon = true;

		browser.get('https://compellowebmain.z16.web.core.windows.net/');
		browser.waitForAngularEnabled(false);

		var username = element(by.xpath("//div[@class='login-wrapper']/div[2]/input[@class='form-control ng-pristine ng-valid ng-touched']"));
		var password = element(by.css("input[type='password']"));
		var customerId = element(by.id('exampleInputEmail3'));
		var select = element(by.id('drpLanguageSelection'));
		var loginButton = element(by.xpath("//button[@class='login-button']"));
		var adminButton = element(by.xpath("//div[@id='btnAdmin']/div[@class='shortcut-icon']"));
		var addClientButton = element(by.xpath("//span[@class='icon-zoom-in']"));
	 	var clientId = element(by.xpath("//div[@class='row mb-2']/div[1]/input[@class='create-client__input ng-pristine ng-valid ng-touched']"));
	    var clientName = element(by.css("//input[@class='create-client__input ng-untouched ng-pristine ng-valid']"));
		var saveButton = element(by.xpath("//button[@id='saveSettings']"));
		var until = protractor.ExpectedConditions;

		// select.isDisplayed().then(function (isVisible) {
		//  	if (isVisible) {
				browser.wait(until.elementToBeClickable(select), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
		 		select.$('[value="en-US"]').click();
		//  	}
		//  });

		
				browser.wait(until.elementToBeClickable(customerId), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
				customerId.sendKeys('bookkeeper');
		

				browser.wait(until.elementToBeClickable(username), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
		        username.sendKeys('admin');
		
		
				browser.wait(until.elementToBeClickable(password), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
				password.sendKeys('admin');
	
		
		// loginButton.isPresent().then(function (isVisible) {
			// if (isVisible) {
				browser.wait(until.elementToBeClickable(loginButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
				loginButton.click();
				browser.sleep(10000);
				expect(browser.getTitle()).toEqual("Compello Approve");

				browser.wait(until.elementToBeClickable(adminButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	            adminButton.click();
				browser.sleep(10000);
				expect(browser.getTitle()).toEqual("Compello Approve");
				//expect(element(by.xpath("//p[.='Client setup']")).isPresent()).toBe(true);

				browser.wait(until.elementToBeClickable(addClientButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
				addClientButton.click();
				browser.sleep(10000);
				expect(element(by.xpath("//label[@class='mb-0']")).isPresent()).toBe(true);

				// clientId.isDisplayed().then(function (isVisible) {
				// if (isVisible) {
				//browser.wait(until.elementToBeClickable(clientId), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
		        clientId.sendKeys('TestClient');
				// }
			    // });

				// clientName.isDisplayed().then(function (isVisible) {
				// 	if (isVisible) {
						//browser.wait(until.elementToBeClickable(clientName), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
						clientName.sendKeys('TestSanara');
					// }
					// });

				
				browser.wait(until.elementToBeClickable(saveButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
				saveButton.click();
			
			//	expect(element(by.xpath("//input[@id='clientName']")).getText().toEqual("TestSanara"));
				
			// }
		// });
		
	});

	// it('should create a client', function () {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
	// 	browser.ignoreSynchronizaon = true;

	// 	browser.get('https://processdashboardweb.z16.web.core.windows.net/');
	// 	browser.waitForAngularEnabled(false);

		
	// 	
	// 	var until = protractor.ExpectedConditions;

	
		
	// });

	
	// it('should create a client - two', function () {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
	// 	browser.ignoreSynchronizaon = true;

	// 	browser.get('https://compellowebadmin.z16.web.core.windows.net/admin/client/edit;clientId=0/edit');
	// 	browser.waitForAngularEnabled(false);
		
	// 	var addClientButton = element(by.xpath("//span[@class='icon-zoom-in']"));
	// 	var clientId = element(by.xpath("//div[@class='row mb-2']/div[1]/input[@class='create-client__input ng-pristine ng-valid ng-touched']"));
	// 	var clientName = element(by.css("//input[@class='create-client__input ng-untouched ng-pristine ng-valid']"));
	// 	var saveButton = element(by.xpath("//button[@id='saveSettings']"));
	// 	var until = protractor.ExpectedConditions;

	// 	browser.wait(until.elementToBeClickable(addClientButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 	addClientButton.click();

	// 	expect(element(by.xpath("//label[@class='mb-0']")).isPresent()).toBe(true);

		

	// 	clientId.sendKeys('TestClient');
	// 	clientName.sendKeys('TestSanara');
	// 	browser.wait(until.elementToBeClickable(saveButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 	saveButton.click();

	// 	expect(element(by.xpath("//input[@id='clientName']")).toEqual("TestSanara"));
	// 	});

	// 	it('should create a user', function () {
	// 		jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
	// 		browser.ignoreSynchronizaon = true;
	
	// 		browser.get('https://compellowebadmin.z16.web.core.windows.net/admin/client/edit;clientId=0/edit');
	// 		browser.waitForAngularEnabled(false);
			
	// 		var userSetupBtn = element(by.xpath("//p[.='User setup']"));
	// 		var addUserButton = element(by.xpath("//span[@class='icon-zoom-in']"));
	// 		var userId = element(by.css("[placeholder='User ID']"));
	// 		var firstName = element(by.css("[placeholder='First name']"));
	// 		var surName = element(by.css("[placeholder='Surname']"));
	// 		var pw = element(by.css("[placeholder='Password']"));
	// 		var saveUserBtn = element(by.css("#saveSettings"));
	// 		var until = protractor.ExpectedConditions;
			
	// 		browser.wait(until.elementToBeClickable(userSetupBtn), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 		userSetupBtn.click();
	// 		addUserButton.click();
			
	
	// 		expect(element(by.xpath("//label[@class='mb-0']")).isPresent()).toBe(true);
	
	// 		userId.sendKeys('SanaraTestUser');
	// 		firstName.sendKeys('Sanara');
	// 	    surName.sendKeys('Premaratne');
	// 		pw.sendKeys('automation');
	// 		browser.wait(until.elementToBeClickable(saveUserBtn), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 		saveUserBtn.click();
	
	// 		expect(element(by.xpath("//input[@name='Firstname']")).toEqual("Sanara"));
			
	// 	});

	// 	it('connect client to user', function () {
	// 		jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
	// 		browser.ignoreSynchronizaon = true;
	
	// 		browser.get('https://compellowebadmin.z16.web.core.windows.net/admin/user/1/clients');
	// 		browser.waitForAngularEnabled(false);

	// 		var connectButton = element(by.css(".icon-clients-conneted-to-users"));
	// 		var searchClient = element(by.xpath("//input[@class='user-search-block__input ng-pristine ng-valid ng-touched']"));
	// 		var addClientUser = element(by.xpath("//div[@class='user-selection']/div[2]//label[@class='check-label']"));
	// 		var addClientBtn = element(by.css(".admin-view-grid__view__button-wrapper__btn"));
	// 		var chkBookkeeping = element(by.css("[for='sitem40']"));
			
	// 		var until = protractor.ExpectedConditions;
			
	// 		browser.wait(until.elementToBeClickable(connectButton), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 		connectButton.click();

	// 		searchClient.isDisplayed().then(function (isVisible) {
	// 			if (isVisible) {
	// 				searchClient.sendKeys('TestSanara');
	// 			}
	// 		});

	// 		browser.wait(until.elementToBeClickable(addClientUser), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 		addClientUser.click();
	// 		addClientBtn.click();
			
			
	
	// 		expect(element(by.xpath("//label[@class='mb-0']")).isPresent()).toBe(true);
	
	// 		userId.sendKeys('SanaraTestUser');
	// 		firstName.sendKeys('Sanara');
	// 	    surName.sendKeys('Premaratne');
	// 		pw.sendKeys('automation');
	// 		browser.wait(until.elementToBeClickable(saveUserBtn), 10000, "Time Out Error: Element cannot clickable after 10000 milli");
	// 		saveUserBtn.click();
	
	// 		expect(element(by.xpath("//input[@name='Firstname']")).toEqual("Sanara"));
			
			
			
			
	// 	});
});