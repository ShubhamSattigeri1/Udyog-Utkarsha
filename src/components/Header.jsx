import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import NewsTicker from './NewsTicker';

export default function Header() {
  const organizationDetails = {
    name: 'Udyog Utkarsh Samajik Sanstha',
    subtitle: 'Skill Development & Self Employment Training Institute',
    contact: '8208305484',
    email: 'udyogutkarsh@gmail.com',
    website: 'www.udyogutkarsh.org.in',
    regNo: 'F/16709/Satara',
    marathiText: 'उद्योगाचा सर्वांगीण विकास हाच आमचा ध्यास',
  };

  const contactLinks = [
    {
      icon: Phone,
      label: organizationDetails.contact,
      href: `tel:${organizationDetails.contact}`,
    },
    {
      icon: Mail,
      label: organizationDetails.email,
      href: `mailto:${organizationDetails.email}`,
    },
    {
      icon: Globe2,
      label: organizationDetails.website,
      href: `https://${organizationDetails.website}`,
      external: true,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#07111f] text-white shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
        <div className="container mx-auto px-4 py-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <Link to="/" className="shrink-0" aria-label="Go to home page">
                  <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#ff9f1c] text-2xl font-bold text-white shadow-[0_0_28px_rgba(255,159,28,0.24)]">
                    उद
                  </div>
                </Link>

                <div className="min-w-0">
                  <h1 className="font-display text-2xl font-bold leading-tight tracking-normal text-white md:text-3xl">
                    {organizationDetails.name}
                  </h1>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {organizationDetails.subtitle}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#ffcf3f]">
                    {organizationDetails.marathiText}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 pl-0 text-xs font-medium text-slate-200 sm:pl-20 lg:pl-0">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex min-h-7 items-center gap-2 hover:text-[#ffcf3f]"
                    >
                      <Icon className="h-3.5 w-3.5 stroke-[1.7]" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <Link
              to="/admin"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#ffcf3f] px-6 text-xs font-bold text-[#07111f] shadow-[0_0_22px_rgba(255,207,63,0.18)] hover:bg-[#ffd95e]"
            >
              ADMIN LOGIN
            </Link>
          </div>

          <div className="mt-5 border-t border-white/10 pt-3">
            <p className="text-xs font-medium text-slate-400">
              Registration: {organizationDetails.regNo} | Satara
            </p>
          </div>
        </div>
      </header>

      <NavigationMenu />
      <NewsTicker />
    </>
  );
}
