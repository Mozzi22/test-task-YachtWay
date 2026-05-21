import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Load app.js after the React component mounts so it can attach its event listeners.
    const script = document.createElement('script');
    script.src = '/app.js';
    script.async = false;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="screen relative grid grid-cols-[324px_minmax(0,1fr)] w-full min-h-screen bg-white" aria-labelledby="page-title">
        {/* Sidebar Rail */}
        <aside
          className="rail sticky top-0 z-10 flex flex-col w-[324px] shrink-0 h-screen min-h-[800px] pt-[34px] px-10 pb-[38px] text-white rounded-r-sm"
          style={{ background: 'linear-gradient(173deg, #08070c 2%, #201235 55%, #1d285a 88%, #002650 114%), #22222d' }}
          aria-label="Listing steps"
        >
          <a className="brand relative block flex-none w-[156px] h-[38px] text-white font-[Red_Hat_Display] text-[21.958px] font-normal leading-[36.93px] tracking-[1.3175px] no-underline" href="#" aria-label="Yacht Way">
            <span className="absolute top-0 left-0 whitespace-nowrap">YACHT</span>
            <span className="brand-light absolute top-0 left-[80.19px] whitespace-nowrap font-light">WAY</span>
            <img className="brand-mark absolute left-[78.87px] top-[5.83px] w-[77.13px] h-[25.98px] pointer-events-none" src="/assets/logo-subtract.svg" alt="" />
          </a>

          <nav className="steps flex flex-col mt-[60px] gap-2">
            <a className="step done relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-white text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-purple bg-white rounded-[4px] text-[12px] leading-none">↵</span>
              <span>Listing Contact</span>
              <span className="step-mark text-white text-sm leading-none">✓</span>
              <span className="step-mark text-white text-sm leading-none">⌁</span>
            </a>

            <a className="step current relative grid grid-cols-[40px_1fr] gap-x-4 items-center w-[244px] min-h-[48px] text-white text-[18px] font-medium leading-[28px] no-underline after:content-[''] after:absolute after:left-[19px] after:top-[42px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#" aria-current="step">
              <span className="step-icon flex items-center justify-center w-10 h-10 text-white bg-white/40 border border-[#f6f6f733] rounded-[4px] text-[12px] leading-none">♟</span>
              <span>General Info</span>
            </a>

            <a className="step relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-muted text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">✦</span>
              <span>Power</span>
            </a>

            <a className="step relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-muted text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">✣</span>
              <span>Vessel Features</span>
            </a>

            <a className="step relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-muted text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">▥</span>
              <span>Accommodation</span>
            </a>

            <a className="step relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-muted text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">▣</span>
              <span>Photos</span>
            </a>

            <a className="step relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-muted text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">■</span>
              <span>Videos</span>
            </a>

            <a className="step tour relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[48px] text-muted text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[42px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20" href="#">
              <span className="step-icon text flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">3D</span>
              <span>3D Tour &amp; Brochure</span>
            </a>

            <a className="step relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-muted text-[16px] leading-6 no-underline" href="#">
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">≡</span>
              <span>Listing Summary</span>
            </a>
          </nav>

          <a className="create-new mt-auto text-white text-[12px] font-medium leading-[18px] no-underline" href="#">CREATE NEW LISTING</a>
        </aside>

        <button className="draft-button absolute top-8 right-[60px] z-20 min-w-[180px] h-10 px-5 text-ink bg-transparent border border-[#22222d] rounded-[4px] text-[12px] font-medium leading-[18px]" type="button">Save to Drafts &amp; Exit</button>

        <section className="content relative w-full max-w-[564px] mx-auto px-0 py-[70px] pb-[52px]" aria-label="General info form">
          <header className="header relative min-h-[58px] mb-6">
            <h1 id="page-title" className="m-0 text-[#22222d] text-[26px] font-medium leading-[34px]">General Info</h1>
            <div className="heat absolute right-0 -top-2 flex items-center gap-2 h-10 py-1 pr-2 pl-1 text-ink-2 bg-[#f9fafb] rounded-[20px] text-sm leading-6">
              <span className="snow flex items-center justify-center w-8 h-8 text-[#4fb7e6] bg-[#eff9ff] rounded-full text-xl leading-none">✳</span>
              <span>Listing Heat: <strong className="text-[#22222d] font-semibold">Freezing</strong></span>
              <span className="help-dot inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic border border-transparent">?</span>
            </div>
          </header>

          <form className="form flex flex-col" noValidate>
            
            {/* Vessel Details */}
            <section className="group vessel-details relative mb-[44px]">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">⚓</span> Vessel Details
              </h2>
              
              <div className="row two grid grid-cols-2 gap-5 mb-4">
                <div className="field combo relative block h-10" data-combo="make">
                  <label htmlFor="make-input" className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Make*</label>
                  <input id="make-input" className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-[44px] text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" autoComplete="off" role="combobox" aria-expanded="false" aria-controls="make-options" />
                  <button className="combo-toggle absolute right-[1px] top-[1px] !w-[38px] !h-[38px] !p-0 !border-0 !bg-transparent text-transparent flex items-center justify-center after:block after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45" type="button" aria-label="Show make options"></button>
                  <div className="combo-menu hidden absolute z-20 top-[44px] left-0 right-0 max-h-[260px] overflow-auto p-2 bg-white border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]" id="make-options" role="listbox"></div>
                  <p className="field-message hidden absolute left-0 top-[42px] m-0 text-[#b42318] text-xs leading-4" id="make-message"></p>
                </div>

                <div className="field combo relative block h-10" data-combo="model">
                  <label htmlFor="model-input" className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Model*</label>
                  <input id="model-input" className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-[44px] text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" autoComplete="off" role="combobox" aria-expanded="false" aria-controls="model-options" />
                  <button className="combo-toggle absolute right-[1px] top-[1px] !w-[38px] !h-[38px] !p-0 !border-0 !bg-transparent text-transparent flex items-center justify-center after:block after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45" type="button" aria-label="Show model options"></button>
                  <div className="combo-menu hidden absolute z-20 top-[44px] left-0 right-0 max-h-[260px] overflow-auto p-2 bg-white border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]" id="model-options" role="listbox"></div>
                  <p className="field-message hidden absolute left-0 top-[42px] m-0 text-[#b42318] text-xs leading-4" id="model-message"></p>
                </div>
              </div>

              <div className="row two grid grid-cols-2 gap-5 mb-4">
                <div className="field combo relative block h-10" data-combo="year">
                  <label htmlFor="year-input" className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Year*</label>
                  <input id="year-input" className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-[44px] text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" autoComplete="off" inputMode="numeric" role="combobox" aria-expanded="false" aria-controls="year-options" />
                  <button className="combo-toggle absolute right-[1px] top-[1px] !w-[38px] !h-[38px] !p-0 !border-0 !bg-transparent text-transparent flex items-center justify-center after:block after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45" type="button" aria-label="Show year options"></button>
                  <div className="combo-menu year-menu hidden absolute z-20 top-[44px] left-0 right-0 max-h-[260px] overflow-auto p-2 bg-white border border-line rounded-[4px] shadow-[0_14px_32px_rgba(34,34,45,0.14)]" id="year-options" role="listbox"></div>
                  <p className="field-message hidden absolute left-0 top-[42px] m-0 text-[#b42318] text-xs leading-4" id="year-message"></p>
                </div>
                
                <label className="field hull-field relative block h-10" htmlFor="hull-number">
                  <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Hull or Production Number*</span>
                  <input id="hull-number" maxLength={20} className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-10 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" />
                  <i className="help-dot absolute right-3 top-3 inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic" title="If still in production or no official HIN exists yet, enter the production number as a placeholder.">?</i>
                  <p className="field-message hidden absolute left-0 top-[42px] m-0 text-[#b42318] text-xs leading-4" id="hull-message"></p>
                </label>
              </div>

              <label className="field full relative block w-full h-10 mb-4">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Internal ID</span>
                <input className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-[40px] text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" />
                <i className="help-dot absolute right-3 top-3 inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic">?</i>
              </label>

              <div className="row two grid grid-cols-2 gap-5 mb-4">
                <label className="field relative block h-10">
                  <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Current Name</span>
                  <input className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-3 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" />
                </label>
                <label className="field relative block h-10">
                  <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Launch Name</span>
                  <input className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-3 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" />
                </label>
              </div>

              <div className="row two segmented grid grid-cols-2 gap-5 mb-0" data-segmented="condition">
                <button type="button" className="h-10 p-0 text-ink bg-white border border-line rounded-[2px] text-sm leading-5 text-center data-[active=true]:text-purple data-[active=true]:border-purple-line data-[active=true]:bg-[#fbf8ff]" data-value="new">New</button>
                <button type="button" className="h-10 p-0 text-ink bg-white border border-line rounded-[2px] text-sm leading-5 text-center data-[active=true]:text-purple data-[active=true]:border-purple-line data-[active=true]:bg-[#fbf8ff]" data-value="pre-owned">Pre-owned</button>
              </div>
            </section>

            {/* Vessel Location */}
            <section className="group vessel-location relative mb-[34px]">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">◎</span> Vessel Location
              </h2>
              <label className="field full select relative block w-full h-10 mb-4">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Vessel Location*</span>
                <button type="button" className="flex items-center w-full h-10 m-0 py-2 px-3 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left after:absolute after:right-[14px] after:top-[16px] after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"></button>
                <i className="help-dot absolute right-[35px] top-[12px] inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic">?</i>
              </label>
              <p className="hint -mt-1 mb-[44px] text-muted text-[11px] leading-4">Your vessel will appear in search results for each location you add. No need to create separate listings.</p>
              <label className="check flex items-center gap-3 min-h-[20px] text-[#22222d] text-xs leading-[18px] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 m-0 appearance-none bg-white border border-[#bfc0c4] rounded-[2px] checked:bg-white checked:after:content-['✓'] checked:after:text-purple checked:after:block checked:after:text-center checked:after:leading-[14px]" />
                <span>Not For Sale to US Citizens while in US waters</span>
              </label>
            </section>

            {/* Vessel Type */}
            <section className="group vessel-type relative mb-[22px]">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">⚓</span> Vessel Type
              </h2>
              <label className="field full select relative block w-full h-10 mb-4">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Vessel Type*</span>
                <button type="button" className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-16 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left after:absolute after:right-[14px] after:top-[16px] after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"></button>
                <b className="absolute right-[35px] top-3 text-purple text-[11px] font-medium leading-4">0/4</b>
              </label>
            </section>

            {/* Availability */}
            <section className="group availability relative mb-6">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">▣</span> Availability
              </h2>
              <div className="row two segmented grid grid-cols-2 gap-5 mb-[20px]" data-segmented="availability">
                <button type="button" className="h-10 p-0 text-ink bg-white border border-line rounded-[2px] text-sm leading-5 text-center data-[active=true]:text-purple data-[active=true]:border-purple-line data-[active=true]:bg-[#fbf8ff]" data-value="now">Available Now</button>
                <button type="button" className="h-10 p-0 text-ink bg-white border border-line rounded-[2px] text-sm leading-5 text-center data-[active=true]:text-purple data-[active=true]:border-purple-line data-[active=true]:bg-[#fbf8ff]" data-value="later">Available Later</button>
              </div>
              <label className="field full calendar-field relative block w-full h-10">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Completion Date</span>
                <input id="completion-date" className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-10 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" />
                <i className="absolute right-[10px] top-[10px] text-[#22222d] not-italic text-[16px] pointer-events-none">□</i>
              </label>
            </section>

            {/* Vessel Is Good For */}
            <section className="group good-for relative mb-10">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">⚓</span> Vessel Is Good For: <i className="help-dot inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic">?</i>
              </h2>
              <div className="field full tag-field relative flex items-center gap-1.5 w-full min-h-10 pt-[14px] px-3 pb-2 bg-white border border-line rounded-[2px] outline-none text-sm text-left flex-wrap">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Category</span>
                <em className="inline-flex items-center h-[18px] px-1 text-[#2f2f39] bg-[#f6f6f7] rounded-[2px] not-italic text-[11px]">Watersports ×</em>
                <em className="inline-flex items-center h-[18px] px-1 text-[#2f2f39] bg-[#f6f6f7] rounded-[2px] not-italic text-[11px]">Fishing ×</em>
                <b className="absolute right-3 top-3 text-purple text-[11px] font-medium leading-4">2/4</b>
              </div>
            </section>

            {/* Price */}
            <section className="group price-block relative mb-10">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">$</span> Price
              </h2>
              <div className="row two segmented grid grid-cols-2 gap-5 mb-0" data-segmented="priceMode">
                <button type="button" className="flex items-center justify-center gap-1.5 h-10 p-0 text-ink bg-white border border-line rounded-[2px] text-sm leading-5 text-center data-[active=true]:text-purple data-[active=true]:border-purple-line data-[active=true]:bg-[#fbf8ff]" data-value="range">
                  Price Range <i className="help-dot inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic">?</i>
                </button>
                <button type="button" className="h-10 p-0 text-ink bg-white border border-line rounded-[2px] text-sm leading-5 text-center data-[active=true]:text-purple data-[active=true]:border-purple-line data-[active=true]:bg-[#fbf8ff]" data-value="fixed">Fixed Price</button>
              </div>
              <label className="field full price-input relative block w-full h-10 mt-4 mb-0">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Price*</span>
                <input defaultValue="100,000" className="flex items-center w-full h-10 m-0 py-2 pl-3 pr-14 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left focus:border-purple" />
                <b className="absolute right-3 top-3 text-[#2f2f39] text-[11px] font-medium leading-4">USD⌄</b>
              </label>
              
              <div className="market flex justify-between gap-5 w-full min-h-[72px] mt-0 mb-12 p-[12px_16px] text-muted bg-[#fafafa] border-l-2 border-[#ffb444] text-[11px] leading-4">
                <div>
                  <strong className="block text-[#22222d] text-[11.5px] font-medium mb-0">Price is $1020,156 above market</strong>
                  <p className="m-0">Compared to similar listings on other platforms.</p>
                  <a href="#" className="text-purple no-underline">Learn More</a>
                </div>
                <div>
                  <span>Market range:</span>
                  <strong className="block text-[#22222d] text-[11.5px] font-medium mt-0">$4,200,000 - $7,200,000</strong>
                </div>
              </div>

              <label className="check hide hidden items-center gap-3 min-h-[20px] text-[#22222d] text-xs leading-[18px] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 m-0 appearance-none bg-white border border-[#bfc0c4] rounded-[2px] checked:bg-white checked:after:content-['✓'] checked:after:text-purple checked:after:block checked:after:text-center checked:after:leading-[14px]" />
                <span>Hide Price</span>
              </label>
              <p className="warning text-muted text-xs leading-[18px] mt-0">
                <strong className="text-[#22222d] font-semibold">Warning!</strong> Buyers often skip listings without a price. Hiding your price reduce inquiries substantially.
              </p>
            </section>

            {/* Taxes */}
            <section className="group taxes relative mb-6">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">%</span> Taxes
              </h2>
              <div className="row two grid grid-cols-2 gap-5 mb-4">
                <label className="field select relative block h-10">
                  <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Tax Status</span>
                  <button type="button" className="flex items-center w-full h-10 m-0 py-2 px-3 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left after:absolute after:right-[14px] after:top-[16px] after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"></button>
                </label>
                <label className="field select relative block h-10">
                  <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Import Duty Paid*</span>
                  <button type="button" className="flex items-center w-full h-10 m-0 py-2 px-3 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left after:absolute after:right-[14px] after:top-[16px] after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45">Yes</button>
                </label>
              </div>
              <label className="field select duty relative block w-full h-10 mb-4">
                <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Country Of Duty*</span>
                <button type="button" className="flex items-center w-full h-10 m-0 py-2 px-3 pr-10 text-ink bg-white border border-line rounded-[2px] outline-none text-sm leading-5 text-left after:absolute after:right-[35px] after:top-[16px] after:w-[9px] after:h-[9px] after:border-r after:border-b after:border-soft after:rotate-45"></button>
                <i className="help-dot absolute right-3 top-[12px] inline-flex items-center justify-center w-4 h-4 text-soft bg-[#2222221a] rounded-full text-[11px] leading-none not-italic">?</i>
              </label>
            </section>

            {/* Warranties */}
            <section className="group warranties relative mb-6">
              <h2 className="flex items-center gap-2 h-[18px] m-0 mb-4 text-muted text-xs font-medium leading-[18px] uppercase">
                <span className="text-sm">▤</span> Warranties
              </h2>
              <div className="warranty-list flex flex-col gap-[12px]">
                
                {[
                  { name: 'General', toggle: 'generalWarranty' },
                  { name: 'Engine', toggle: 'engineWarranty' },
                  { name: 'Hull', toggle: 'hullWarranty' },
                  { name: 'Generator', toggle: 'generatorWarranty' }
                ].map((w, index) => (
                  <article key={w.name} className="warranty-card grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 text-sm text-ink pb-2 mt-2">
                    <p className="m-0 text-[#22222d] font-normal">
                      {w.name} <span className="font-normal text-muted">Warranty</span>
                    </p>
                    <label className="datebox relative flex items-center h-10">
                      <span className="absolute left-3 -top-2 z-10 px-1 text-muted bg-white text-xs font-medium leading-[18px]">Expiration Date</span>
                      <input defaultValue="08.08.2029" className="flex w-[160px] h-[40px] p-2 pl-3 bg-white border border-line rounded-[2px] outline-none text-sm text-ink leading-5 focus:border-purple" />
                    </label>
                    <i className="not-italic text-[16px] text-[#22222d] self-center">□</i>
                    <button className="toggle relative w-9 h-5 bg-line rounded-full flex items-center px-0.5 transition-colors aria-pressed:bg-purple border-0 outline-none" type="button" data-toggle={w.toggle} aria-label={`${w.name} Warranty enabled`}>
                      <span className="block w-4 h-4 bg-white rounded-full transition-transform translate-x-0"></span>
                    </button>
                  </article>
                ))}

              </div>
            </section>

            <div className="actions flex gap-4 mt-6">
              <button className="back min-w-[112px] h-10 px-4 text-ink bg-white border border-transparent font-medium rounded-[4px] text-sm leading-[20px]" type="button">← Back</button>
              <button className="save min-w-[112px] h-10 px-4 text-white bg-purple border border-purple rounded-[4px] font-medium text-sm leading-[20px]" type="submit">Save &amp; Next →</button>
            </div>
          </form>
        </section>
      </main>

      <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#08070c6b] hidden" data-modal hidden>
        <section className="model-modal w-full max-w-[440px] p-6 bg-white rounded-[8px] shadow-[0_24px_80px_rgba(8,7,12,0.28)]" role="dialog" aria-modal="true" aria-labelledby="model-modal-title">
          <header className="flex items-center justify-between gap-3 mb-0">
            <h2 id="model-modal-title" className="m-0 text-ink text-[20px] font-medium leading-[28px]">Create New Model</h2>
            <button className="modal-close w-8 h-8 text-muted bg-transparent border-0 text-[24px] leading-none flex items-center justify-center" type="button" aria-label="Close model creation modal">×</button>
          </header>
          <p className="modal-copy my-3 mb-[22px] text-muted text-[14px] leading-[20px]">This model will appear only under My Created Models for your account unless the shipyard adds an official version later.</p>
          <label className="field modal-field relative block h-[40px] mb-[28px]" htmlFor="new-model-name">
            <span className="absolute left-[12px] -top-[8px] z-10 px-1 text-muted bg-white text-[12px] font-medium leading-[18px]">Model Name*</span>
            <input id="new-model-name" className="flex items-center w-full h-[40px] m-0 py-[8px] px-[12px] text-ink bg-white border border-line rounded-[2px] outline-none text-[14px] leading-[20px] text-left focus:border-purple" />
            <p className="field-message hidden absolute left-0 top-[42px] m-0 text-[#b42318] text-[12px] leading-[16px]" id="new-model-message"></p>
          </label>
          <footer className="flex items-center justify-end gap-[12px] mt-0">
            <button className="secondary-action min-w-[112px] h-[40px] px-[16px] text-ink bg-white border border-line rounded-[4px] text-[14px] font-medium leading-[20px]" type="button" data-cancel-model>Cancel</button>
            <button className="primary-action min-w-[112px] h-[40px] px-[16px] text-white bg-purple border border-purple rounded-[4px] text-[14px] font-medium leading-[20px]" type="button" data-create-model>Create Model</button>
          </footer>
        </section>
      </div>
    </>
  );
}
