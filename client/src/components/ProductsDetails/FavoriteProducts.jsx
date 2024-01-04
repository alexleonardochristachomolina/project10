import React from 'react';

const FavoriteProducts = () => {
  const like = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/b720/dd65/fcc6274edfb7e97f682185ec460b6d4f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z0Sc7xLpA2fApq1g8zAhRFskydwkJvkWK63xnA57zKOcPPbo4AnRw~OeTuH9cHldyMS9i-x5A9vDyUwXck8YcJk62RwrL~Rp7WAoOsvV24S9CcHHqPKPjAXnulh4KTY6HO0u2eWMSqO-cETQ~sh2reePifXZXjPNh-t2OX2Eu2mk63mw0Z3Bx8EWDxGX-Xb0ila50b3NinXdFX-UK7vdnLfuZ6Zvuyp7g9jgnW0wNZofOR8A1JEKubGCrAgmT9Xb0E5gVkEgzsA6M63nnOR41pmyXSjeEKlGsotfw7HLHTdMin-aOOaUTmV8QK1nAFLyIzOwABkcxbAyw87EnNEOgg__',
      name: 'Men Blazers Sets Elegant Formal',
      from: '7.00',
      to: '99.50',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/66ac/8758/b171e503e38e7b8c0a5fa03996d5d467?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SaAaObhUh2At6TfOpeasW1pkardYsBTguHOaaeKSCaGRYZX99O32blCxJoTUo3EsnL~ko20Y17TpxrEjCVzIYTaCvt9pMVjR4LJpjGPwWGDwi~o74guU971akfwn4Y2~GpoHo3lA4GKUO7MPDW1BvgUbgIgJFADMAO8whkuksBBrRfwAhdRXtqeWhKgco~Ba~J7Kan7yTI-Qex4K2ilUIQwUW5A-8VV8HxptcgRvmQht6ImIoTuxtu4T2g2wLSf40NOTTK0Yfu2oeWzXASK-iKNGS-bxL1UkpQr6TSh~Nj-8B2qvLdMxWc2jFNkfHRmFi7gDk3kGFGpBx1o~0pgbYw__',
      name: 'Men Shirt Sleeve Polo Contrast',
      from: '7.00',
      to: '99.50',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/a14a/b6ac/18aa7b0da8ec069e90fab9443221e2f2?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QT3DK5m8guaiFrE80bmgR~70Qo4jHYo-agcNpJUiPLYsbpgnpKdUtc0bJZKSwI-g6DC8vTK1qDpnJaEsSKJ7FnO2ivI2achtbHnPI7t~2SGwf78H2xyI3VlGwzriYe3gh4Le2JMqU4sUa8drP3eem~lt8aR9BXmS9eInn1hxWmDWXmpt45EeQo6Leqlt4nv-pBhJu6Jd1SxNUYkLeT9n0598u1kUD-Xyx7-KrGJ9oS-MHQYhHChtpFsfuOihzYn8ws4lQSEDoFTc~886mHtjSDZoTCcH2e-Hf8Fb3wCUtydvZ8LH0URx3Yy84Sd8BYKkh9sZzk~oC6vVgKo9udgHPw__',
      name: 'Apple Watch Series Space Gray',
      from: '7.00',
      to: '99.50',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/55a9/1dea/606bf3ac6b9c1b897823e7ee6f0100ae?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHIxwbSMJR7P3I7VnKsuvBJeE7~ZpUe1ux5pus0nt1QHUnkahdHRyScaxw47SJ~JT0KhPdD1EbRfttle90rQ4C0KaUEcGlmUQSTMczvvPpXLqzuZ87NqSBFzNtw8a2DCvo8oep22PRQ3I74nPzsx0AaJVpN0hICSRQe39uurlyyFK2v2U~0IDymmg2sUn2-9nj5ax8WU0ZGU-3dBpcj7q1j3K4r3YJjBGOqhPQEa1GhDDBeJflyaK5gg83Xyeybwvy1WyZNeuFe~EXcuYXaGdln4V1yJSp9T3Tzd1ABTdpgPE--AUbvFOD687c9vSczhq0HgTDXQNgZiqUFJ0i5oLw__',
      name: 'Basketball Crew Socks Long Stuff',
      from: '7.00',
      to: '99.50',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/deea/14d7/8e68b15c28eb29234224b8b2f71d5eb5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaG2xvl4IyX2htmkDbjACNGlqUZjxDoH4vvoJv60XVubGBGsSIIp7eeI8K66ZZ4ccQpcO5SXPEq8qYU4P~OrhBSwRYAMPoc55XcTom2n8b~K9UuwrArpqmutsuheUFtTIGt1UySO-e7QEQbgWPZiKcYi9dy~BQjnZEqUoG6zvPONx1uhK1ViI8344SaVffwzDoxbXVTAE3G4w5bQ5VqofofmrliRO2IJznkEhBDBy5mUmtS9zgw7rPpszUyQXr5E4RWlUoBS9ja8bpD4WTKnyyWUv3ffkHKeJnwAkRx0Pd7OKF0B5kB4~vM5SgideXTeIQdKTuEzT-qmH1UmfdJlpg__',
      name: 'New Summer Mens  castrol T-Shirts',
      from: '7.00',
      to: '99.50',
    },
  ];
  return (
    <div className="w-full border-[1px] rounded-lg shadow bg-white p-4">
      <p className="mb-4 font-semibold">You may like</p>
      <div className="flex overflow-x-auto gap-2">
        {like?.map((prod, i) => (
          <div key={i} className="flex gap-4 min-w-fit">
            <div className="w-[70px] h-[70px] px-[8.711px] py-[5.289px] border">
              <img src={prod.img} alt="" />
            </div>
            <div>
              <h3 className="text-[#1C1C1C] w-36">{prod.name}</h3>
              <span className="text-[#8B96A5]">
                ${prod.from} - ${prod.to}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
