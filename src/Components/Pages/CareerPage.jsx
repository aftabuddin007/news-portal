import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, BookOpen, Users, Heart, TrendingUp } from 'lucide-react';

const NewspaperCareersPage = () => {
  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: 'Senior Investigative Reporter',
      department: 'News',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$85k - $120k',
      posted: '2 days ago',
      description: 'Uncover stories that matter. Lead complex investigations and produce deeply reported features for print and digital.'
    },
    {
      id: 2,
      title: 'Digital Photo Editor',
      department: 'Visual Journalism',
      location: 'Remote (US)',
      type: 'Full-time',
      salary: '$65k - $90k',
      posted: '1 week ago',
      description: 'Curate and edit visual content across platforms. Mentor a team of photojournalists and ensure visual storytelling excellence.'
    },
    {
      id: 3,
      title: 'Data Journalist',
      department: 'Interactive News',
      location: 'Washington, DC',
      type: 'Full-time',
      salary: '$75k - $105k',
      posted: '3 days ago',
      description: 'Transform complex data into compelling stories. Build interactive features and collaborate with reporters on data-driven investigations.'
    },
    {
      id: 4,
      title: 'Audience Engagement Editor',
      department: 'Audience Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$70k - $95k',
      posted: '5 days ago',
      description: 'Connect our journalism with readers. Manage social media, newsletters, and community outreach initiatives.'
    },
    {
      id: 5,
      title: 'Copy Editor (Weekend)',
      department: 'Copy Desk',
      location: 'Chicago, IL',
      type: 'Part-time',
      salary: '$35 - $45/hr',
      posted: '2 weeks ago',
      description: 'Ensure accuracy, clarity, and style consistency across all sections. Weekend evening shifts required.'
    },
    {
      id: 6,
      title: 'Software Engineer, News Tools',
      department: 'Engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$110k - $150k',
      posted: '1 day ago',
      description: 'Build tools that empower journalists. Develop internal systems and public-facing interactive features.'
    },
  ];

  // Benefits data
  const benefits = [
    { icon: <Heart className="w-5 h-5" />, title: 'Comprehensive Healthcare', description: 'Medical, dental, and vision coverage for you and your family.' },
    { icon: <BookOpen className="w-5 h-5" />, title: 'Professional Development', description: '$2,000 annual stipend for courses, conferences, and training.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: '401(k) with Match', description: 'We help you plan for the future with a generous company match.' },
    { icon: <Users className="w-5 h-5" />, title: 'Collaborative Culture', description: 'Work alongside Pulitzer winners and industry leaders.' },
    { icon: <Briefcase className="w-5 h-5" />, title: 'Flexible Work', description: 'Remote-first culture with flexible hours and hybrid options.' },
    { icon: <Clock className="w-5 h-5" />, title: 'Paid Time Off', description: '4 weeks vacation + 2 weeks of civic engagement leave.' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8 font-serif">
      {/* Main newspaper container */}
      <div className="max-w-7xl mx-auto bg-white shadow-xl p-8 md:p-12 border border-stone-200">
        
        {/* Masthead */}
      

        {/* Main headline */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-stone-900 mb-4 leading-tight">
            Join Our Newsroom
          </h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            Help us shape the future of journalism. We're looking for curious, 
            committed storytellers to join our team across the globe.
          </p>
          {/* Decorative line */}
          <div className="w-24 h-1 bg-stone-400 mx-auto mt-6"></div>
        </div>

        {/* Stats banner - like a newspaper fact box */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-y border-stone-300 py-6">
          {[
            { number: '138', label: 'Years of Excellence' },
            { number: '42', label: 'Pulitzer Prizes' },
            { number: '12', label: 'Global Bureaus' },
            { number: '350+', label: 'Employees' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-stone-800">{stat.number}</div>
              <div className="text-xs uppercase tracking-wider text-stone-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two-column layout for content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content - Job listings */}
          <div className="lg:col-span-2">
            {/* Section header */}
            <div className="flex items-center mb-6 border-b-2 border-stone-800 pb-2">
              <Briefcase className="w-6 h-6 text-stone-700 mr-2" />
              <h3 className="text-2xl font-bold uppercase tracking-wide text-stone-800">
                Open Positions
              </h3>
              <span className="ml-auto text-sm bg-stone-200 px-3 py-1 rounded-full text-stone-700">
                {jobListings.length} listings
              </span>
            </div>

            {/* Job listings grid */}
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div 
                  key={job.id} 
                  className="border border-stone-200 p-6 hover:border-stone-500 transition-colors bg-stone-50"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-stone-900">{job.title}</h4>
                      <p className="text-sm text-stone-600 mt-1">{job.department}</p>
                    </div>
                    <span className="bg-stone-800 text-stone-100 text-xs px-3 py-1 uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-stone-700">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-stone-600">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" /> {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> Posted {job.posted}
                    </span>
                    <span className="flex items-center font-medium text-stone-800">
                      <DollarSign className="w-4 h-4 mr-1" /> {job.salary}
                    </span>
                  </div>
                  
                  <button className="mt-4 text-sm font-bold uppercase tracking-wide text-stone-700 hover:text-stone-900 border-b border-stone-400 hover:border-stone-800 pb-0.5 transition">
                    View & Apply →
                  </button>
                </div>
              ))}
            </div>
            
            {/* Note about future openings */}
            <div className="mt-8 p-4 bg-stone-100 border-l-4 border-stone-600 text-stone-700">
              <p className="text-sm italic">
                <span className="font-bold">Note:</span> Don't see the right fit? We're always looking for talented 
                journalists, engineers, and creatives. Send your resume to <span className="font-bold">talent@dailychronicle.com</span>
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why join us */}
            <div className="border-t-4 border-stone-800 pt-4">
              <h3 className="text-xl font-bold uppercase tracking-wide text-stone-800 mb-4 flex items-center">
                <span className="bg-stone-800 w-2 h-6 inline-block mr-2"></span>
                Why Join Us?
              </h3>
              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  For over a century, The Daily Chronicle has been a beacon for journalists 
                  who believe in the power of facts. We combine the rigor of a legacy 
                  institution with the innovation of a modern media company.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Our commitment to diversity, equity, and inclusion isn't just a statement—it's 
                  essential to our mission. We actively seek voices that reflect the communities 
                  we serve.
                </p>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="border-t-2 border-stone-300 pt-6">
              <h3 className="text-lg font-bold uppercase tracking-wide text-stone-800 mb-4 flex items-center">
                <span className="bg-stone-600 w-2 h-5 inline-block mr-2"></span>
                Benefits & Culture
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 border-b border-stone-200 pb-3 last:border-0">
                    <div className="text-stone-600 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 text-sm">{benefit.title}</p>
                      <p className="text-xs text-stone-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming events / recruitment */}
            <div className="bg-stone-900 text-stone-100 p-6">
              <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Meet Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">►</span>
                  <span>Journalism Career Fair - Nov 15, NYC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">►</span>
                  <span>Virtual Info Session - Nov 28, 2pm ET</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">►</span>
                  <span>NAHJ / NABJ Conventions - Dec 2023</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-stone-700 text-center">
                <p className="text-xs uppercase tracking-widest">Questions?</p>
                <p className="text-sm mt-1">recruiting@dailychronicle.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with equal opportunity statement */}
        <div className="mt-12 pt-6 border-t-2 border-stone-700">
          <div className="text-center text-xs text-stone-600 space-y-2">
            <p className="uppercase tracking-wide font-medium">
              The Daily Chronicle is an Equal Opportunity Employer
            </p>
            <p>
              We celebrate diversity and are committed to creating an inclusive environment for all employees. 
              All qualified applicants will receive consideration for employment without regard to race, color, 
              religion, gender, gender identity or expression, sexual orientation, national origin, genetics, 
              disability, age, or veteran status.
            </p>
            <p className="pt-2">
              © 2023 The Daily Chronicle • 123 Fleet Street, Cityville • (800) 555-0185
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewspaperCareersPage;