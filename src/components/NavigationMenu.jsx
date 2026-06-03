import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationMenu() {
  const location = useLocation();

  const navigationRows = [
    [
      { label: 'HOME', path: '/' },
      { label: 'ABOUT US', path: '/about' },
      { label: 'COLLEGE TRAINING PROGRAMMES', path: '/college-programmes' },
      { label: 'SCHOOL TRAINING PROGRAMMES', path: '/school-programmes' },
      { label: 'HEALTH CAMPS', path: '/health-camps' },
    ],
    [
      { label: 'OTHER TRAIINING PROGRAMMES', path: '/other-programmes' },
      { label: 'AGRICULTURE & ALLIED BUSINESS TRAINING PROGRAMMES', path: '/agriculture' },
      { label: 'WOMEN EMPOWERMENT', path: '/women-empowerment' },
    ],
    [
      { label: 'ENVIRONMENTAL DRIVES', path: '/environmental' },
      { label: 'AWARDS & RECOGNITIONS', path: '/awards' },
      { label: 'SUCCESS STORIES', path: '/success-stories' },
      { label: 'TESTIMONIALS', path: '/testimonials' },
      { label: 'JOIN US SOCIALLY', path: '/join-socially' },
    ],
    [
      { label: "GOVT. RESOLOUTIONS (GR's)", path: '/govt-resolutions' },
      { label: 'PUBLICATIONS', path: '/publications' },
      { label: 'PRESS NOTES', path: '/press-notes' },
      { label: 'VERIFY OUR CERTIFICATE', path: '/verify-certificate' },
      { label: 'EVENTS / COMPETITIONS', path: '/events' },
    ],
    [
      { label: 'CSR & INSTITUTIONAL COLLABORATION', path: '/csr' },
      { label: 'UDYOG UTKARSH PORTAL', path: '/portal' },
      { label: 'DONATE US', path: '/donate' },
      { label: 'CONTACT US', path: '/contact' },
      { label: 'ADMIN LOGIN', path: '/admin' },
    ],
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#07111f] text-white shadow-md" aria-label="Primary navigation">
      <div className="container mx-auto px-4 pb-4 lg:px-6">
        <div className="border-t border-white/10 pt-4">
          <div className="mt-3 rounded-md border border-white/10 bg-[#0b1626] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] space-y-2">
            {navigationRows.map((row, rIdx) => {
              const cols = row.length || 1;

              return (
                <div
                  key={rIdx}
                  role="tablist"
                  aria-label={`Navigation row ${rIdx + 1}`}
                  className={`${rIdx > 0 ? 'border-t border-white/5 pt-3' : ''} gap-2 items-stretch`}
                  style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                >
                  {row.map((item) => (
                    <Link
                      key={item.path + '-' + item.label}
                      to={item.path}
                      role="tab"
                      className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-150 text-center ${
                        isActive(item.path)
                          ? 'bg-white/10 text-[#ffcf3f] border border-white/10'
                          : 'text-slate-200 hover:bg-white/5 hover:text-[#ffcf3f] hover:shadow-sm'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
