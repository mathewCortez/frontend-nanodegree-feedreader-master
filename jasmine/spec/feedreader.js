//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//http://api.jquery.com/category/traversing/
//https://discussions.udacity.com/t/testing-the-dom-in-jasmine/8438/6
//These are the links that helped me finish this project
//I had to brush up on my jquery just so I knew how to call certain classes and run though arrays


$(function() {

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


       //loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
         
        it('links are defined and not empty', function() {
            allFeeds.forEach(function(urls) {
                expect(urls.url).toBeTruthy();
            });
        });


         //feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
         
        it('each feed has a name and the name is not empty', function() {
            allFeeds.forEach(function(feedName) {
                expect(feedName.name).toBeTruthy();
                //expect(feedName.name.length).not.toBe(0);
            });
        });
    });

    
    describe('The menu', function() {
        var $menu = $('.menu-icon-link');
        
      //menu element is hidden by default. 
        it('hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         //the menu changes visibility 
        it('menu displays when clicked', function() {
            $menu.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
        });
        
        it ('menu hides when reclicked', function() {
            $menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
    });
 
    describe('initial entries', function() {
         //loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('entry element with feed container', function() {
            var $ent = $(".feed .entry");
            expect($ent.length).not.toBe(0);
        });
    });

  
    describe('new feed selection', function() {
        var feed;
  
        // new feed is loaded
         
        beforeEach(function(done) {
            loadFeed(0, function() {
                feed = $('.feed').html();
                done();
            });
        });
        
        it('new feed loaded', function(done) {
            loadFeed(1, function() {
                expect($('.feed').html()).not.toEqual(feed);
                done();
            });
        }); 
        
    });
}());
