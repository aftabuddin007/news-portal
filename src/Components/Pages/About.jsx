import React from 'react';

const NewspaperAboutPage = () => {
  // Sample team data
  const teamMembers = [
    { name: 'Jane Doe', role: 'Editor-in-Chief', bio: '20 years uncovering the truth.', imgPlaceholder: 'JD' },
    { name: 'John Smith', role: 'Senior Reporter', bio: 'Award-winning investigative journalist.', imgPlaceholder: 'JS' },
    { name: 'Maria Garcia', role: 'Photojournalist', bio: 'Capturing moments that matter.', imgPlaceholder: 'MG' },
    { name: 'David Chen', role: 'Digital Editor', bio: 'Bridging traditional reporting with modern tech.', imgPlaceholder: 'DC' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8 font-serif">
      {/* Main container with newspaper texture */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl p-8 md:p-12 border border-stone-200">
        
        {/* Masthead */}
        

        {/* About Us headline & byline */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-stone-900 border-b-2 border-stone-400 pb-2 inline-block">
            About Us
          </h2>
         
        </div>

        {/* Main content: two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column (main story) */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-lg leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-stone-900">
                The Daily Chronicle has been the cornerstone of informed communities
                for over 138 years. What began as a single-sheet circular distributed
                from a small print shop has grown into a modern, multi-platform news
                organization while never wavering from our founding principles: to
                report with integrity, independence, and courage.
              </p>
              <p className="mt-4 leading-relaxed">
                Our mission remains as vital today as it was in 1885. We believe that
                a free and vigorous press is essential to a thriving society. We are
                dedicated to uncovering the truth, holding power to account, and
                giving voice to the voiceless. Our reporters and editors work without
                fear or favor, driven only by the facts and the public interest.
              </p>
            </div>

            {/* Pull quote */}
            <div className="border-l-4 border-stone-700 pl-4 italic text-stone-700 my-8">
              <p className="text-xl">
                "We are not just reporters of news; we are guardians of the public
                trust and storytellers for our community."
              </p>
              <p className="text-sm mt-2">— Margaret Whitmore, Founding Editor</p>
            </div>

            <p className="leading-relaxed">
              In an era of rapid change, we remain committed to the principles of
              rigorous reporting and thoughtful analysis. Our newsroom brings
              together seasoned journalists with deep expertise and emerging voices
              who embrace new ways of storytelling. Whether in print, on our website,
              or through our documentary work, we strive to provide clarity,
              context, and connection.
            </p>

            {/* Second pull quote or fact box */}
            <div className="bg-stone-50 p-4 border border-stone-300 text-sm">
              <span className="font-bold uppercase text-stone-700">At a glance:</span>
              <ul className="list-disc list-inside mt-2 space-y-1 text-stone-800">
                <li>138+ years of continuous publication</li>
                <li>42 Pulitzer Prizes</li>
                <li>Bureaus in 12 countries</li>
                <li>Winner of 2023 Online News Association Award</li>
              </ul>
            </div>
          </div>

          {/* Right column (sidebar / team / history) */}
          <div className="border-l-2 border-stone-300 pl-6 space-y-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-stone-800 mb-3 flex items-center">
                <span className="bg-stone-800 w-2 h-5 inline-block mr-2"></span>
                Our Team
              </h3>
              <div className="space-y-4">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex items-start space-x-3 border-b border-stone-200 pb-3 last:border-0">
                    <div className="w-10 h-10 bg-stone-400 text-white flex items-center justify-center font-bold text-sm uppercase flex-shrink-0 rounded-sm">
                      {member.imgPlaceholder}
                    </div>
                    <div>
                      <p className="font-bold text-stone-800">{member.name}</p>
                      <p className="text-xs text-stone-600">{member.role}</p>
                      <p className="text-xs text-stone-700 mt-1">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-stone-800 mb-3 flex items-center">
                <span className="bg-stone-800 w-2 h-5 inline-block mr-2"></span>
                From the Archive
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="border-b border-stone-200 pb-2">
                  <span className="font-bold">1929:</span> Market Crash Special Edition
                </li>
                <li className="border-b border-stone-200 pb-2">
                  <span className="font-bold">1963:</span> A Nation Mourns
                </li>
                <li className="border-b border-stone-200 pb-2">
                  <span className="font-bold">2008:</span> Historic Election Coverage
                </li>
                <li>
                  <span className="font-bold">2020:</span> Pandemic: Voices from the Frontline
                </li>
              </ul>
            </div>

            <div className="bg-stone-800 text-stone-100 p-4 text-center">
              <p className="text-xs uppercase tracking-widest">Contact us</p>
              <p className="text-sm mt-1">editor@dailychronicle.com</p>
              <p className="text-sm">1-800-555-0185</p>
              <p className="text-xs mt-2">123 Fleet Street, Cityville</p>
            </div>
          </div>
        </div>

        {/* Footer with volume info */}
        <div className="mt-12 pt-4 border-t-2 border-stone-700 text-center text-xs text-stone-600 uppercase tracking-wide flex justify-between">
          <span>Volume CXXXIX • Number 42</span>
          <span>© 2023 The Daily Chronicle</span>
          <span>daily-chronicle.com</span>
        </div>
      </div>
    </div>
  );
};

export default NewspaperAboutPage;