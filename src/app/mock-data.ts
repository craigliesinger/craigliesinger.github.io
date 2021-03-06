import { Work } from './work';
import { School } from './school';
import { MobileApp } from './mobile-app';
import { Hack } from './hack';

export const WORK: Work[] = [
	{name: 'Ecolab',
	 website: 'http://www.ecolab.com/',
	 location: 'Veinna, Austria',
	 roles: [	{title: 'IT Project Manager & PMO', startdate: 'March 2017', enddate: 'Current', details: 'Managing IT projects at EU level and responcible for PMO activities including implementing Portfolio management tools and processes.'},
		 		{title: 'Project Manager CEE', startdate: 'October 2015', enddate: 'March 2017', details: 'Cross-functional and cross-regional Project Management for business projects.'}]
	 },
	{name: 'bwin.party',
	 website: 'http://www.bwinparty.com/',
	 location: 'Veinna, Austria',
	 roles: [{title: 'Business Analyst', startdate: 'September 2013', enddate: 'September 2015', details: 'Creating technical requirements based on business / customer desires.  Serve as connection between business and software development.  Coordinate and prioritize development backlog.'}]
	 },
	{name: 'Cummins Inc.',
	 website: 'http://www.cummins.com/',
	 location: 'Columbus IN, USA',
	 roles: [	{title: 'Project Manager', startdate: 'February 2012', enddate: 'August 2013', details: 'Managed a cross functional team through the new product development process for a new engine platform with a NPV of greater than $50 million USD.'}, 
				{title: 'Customer Integration Engineer', startdate: 'February 2011', enddate: 'February 2012', details: 'Managed mechanical development work on engine components interacting with customer’s vehicle.  Includes designing changes to components using CAD and working with suppliers to resolve issues during development.'}, 
				{title: 'Competitive Intelligence Manager & Market Analyst', startdate: 'August 2008', enddate: 'February 2011', details: 'Monitored competitor actions and analyze potential impact to company and market.  Local expert of automotive marketplace for engines less than 7 liters.  Analyzed market data to identify market gaps and sales opportunities.'}]
	 },
	{name: 'Central Bank',
	 website: 'http://www.centralbank.com/', 
	 location: 'Lexington KY, USA',
	 roles: [	{title: 'MBA Intern - Consultant', startdate: 'October 2007', enddate: 'April 2008', details: 'Part of a MBA student team that completed projects assigned from executive board on NPD, Supply chain, and M&A.  I was responsible to lead the supply chain project.'}]
	 },
	{name: 'Lexmark International',
	 website: 'http://www.lexmark.com/',
	 location: 'Lexington KY, USA',
	 roles: [	{title: 'Hardware Engineering Student Intern', startdate: 'March 2007', enddate: 'July 2007', details: 'Performed design engineering and mechanical development engineering tasks on hardware components for new laser printer program.'}]
	 },
	{name: 'GE Consumer & Industrial',
	 website: 'http://www.geconsumerandindustrial.com/',
	 location: 'Louisville KY, USA',
	 roles: [	{title: 'Engineering Co-op', startdate: 'August 2004', enddate: 'June 2005', details: 'Completed three rotations in the areas of Supply Chain Management, New Product Introduction, and Innovations.'}]
	 }
  ];

  export const SCHOOL: School[] = [
	{university: 'University of Kentucky – Gatton College of Business & Economics',
	 website: 'http://gatton.uky.edu/MBA/',
	 location: 'Lexington KY, USA',
	 startdate: 'July 2007',
	 enddate: 'July 2008',
     degree: 'Master of Business Administration (MBA)',
	 gpa: 3.9
	 },
    {university: 'University of Kentucky – College of Engineering',
	 website: 'https://www.engr.uky.edu/',
	 location: 'Lexington KY, USA',
	 startdate: 'September 2002',
	 enddate: 'May 2007',
     degree: 'Bachelor of Science in Mechanical Engineering',
	 gpa: 3.6
	 },
	 {university: 'Danish Institute for Study Abroad (DIS)',
	 website: 'http://www.disabroad.org/study-abroad-summer/',
	 location: 'Copenhagen, Denmark',
	 startdate: '13 June 2008',
	 enddate: '3 July 2008',
     degree: 'European Business Strategy'
	 },
	 {university: 'Wirtschaftsuniversität Wien - International Summer University',
	 website: 'http://www.wu.ac.at/io/incoming/isuwuin/en/',
	 location: 'Vienna, Austria',
	 startdate: '7 July 2008',
	 enddate: '25 July 2008',
     degree: 'Intercultural Management, Marketing & Corporate Governance'
	 }
  ];

  export const MOBILEAPP: MobileApp[] = [
	{title: 'Baby Badge',
	 short: 'babybadge',
	 time: '2016',
     overview: "Age badges to mark every age milestone of your little one!", 
	 detail: "Babies grow up fast!  Capture every step with a Baby Badge.  Don't spend $10+ for 12 paper baby stickers when you can create hundreds of combinations for any day, week, month or year milestone for free with Baby Badge.",
	 image: [{ss: "img/bb/website1.jpg"}, {ss: "img/bb/website2.jpg"}, {ss: "img/bb/website3.jpg"}, {ss: "img/bb/website4.jpg"}],
	 icon: "img/bb/appIcon2_3x180.png",
	 link: "https://itunes.apple.com/us/app/baby-badge/id1097938477?mt=8"
	},
	{title: 'Math Espresso',
	 short: 'mathespresso',
	 time: '2015',
     overview: "A game to awaken your brain by solving basic math problems as quickly as possible.", 
	 detail: "Wake up your brain with a shot of Math Espresso!  See how quickly you can correctly answer addition, subtraction, multiplication and division questions.",
	 image: [{ss: "img/md/website1_updated.jpg"}, {ss: "img/md/website2_updated.jpg"}, {ss: "img/md/website3_updated.jpg"}],
	 icon: "img/md/iTunesArtwork@2x.png",
	 link: "https://itunes.apple.com/vn/app/math-espresso/id972446911?mt=8"
	 },
	{title: 'German Strong Verbs',
	 short: 'gsv',
	 time: '2012',
     overview: "This was first experiment in the world of iOS application creation. I started as a total novice, but came to learn XCode, objective-C, interface builder / story board, Gimp, and all the various tasks of actually releasing an app to the Apple App Store.",
	 detail: "A straight forward reference for over 150 of the most commonly used irregular (strong) verbs of the German language",
	 image: [{header: "Over 150 irregular verbs",ss: "img/gsv/iphone_ss1.png"},{header: "All cases and tenses", ss: "img/gsv/iphone_ss2.png"}, {header: "Search feature for fast verb finding", ss: "img/gsv/iphone_ss3.png"}],
	 }
  ];

  export const HACK: Hack[] = [
	{title: 'BLE controlled LED Mixing Lamp',
	 short: 'BLED',
	 time: 'Aug 18th, 2016',
     overview: "Arduino + Red Bear BLE 2.1 + Swift = Cool",
	 image: "img/hack/DIY_bled.jpeg"
	},
	{title: 'Remote Thermo Couple Sending Temp to iPhone',
     short: 'bleTemp',
     time: 'October 15th, 2016',
     overview: "Time to receive the data",
     image: "img/hack/DIY_bled.jpeg"
    }
  ];