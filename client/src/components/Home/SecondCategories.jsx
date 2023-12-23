import React from 'react';

export const SecondCategories = () => {
  const categories = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/9d00/665e/e4b654e7de1ac596c31da4b9f1994793?Expires=1704067200&Signature=ciVLST8tpCVqD6M~wQjWdr6GfowOjRTlTa6feOJTDo3qYgEAhDhN4y3bxpzgn82iAVebwby0NuuN4o6a7eLfRURMXDHPuAlqSJbINg7EhMOaSQsXqZymKqZ~X1DYmeAJ8JU79AyARGpnWWKoiAaV1cIo-SvKPSUMAz9NOkTAFuuk-2VUQZpiU-P7CB9a2xjV9vFvQLqLU6BaBBkGbG0hf1BV~nWt0UyOa2iu-jZmXrdMj2mfYah-xMZMBgWXCWmgVAJdMZnOP23x6n9ZvRE40IvUFGWCCxsNNE9kW6fIiJZaAupZR7BL-qyUoSe6tQ2r0warb58PCF-gmIHsJYXTIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Smart watches',
      from: 19,
      id: 1,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/260c/7a4b/2c0a4a3071479d3ea04dbef308c19301?Expires=1704067200&Signature=H9NfQcE3HjXFnfSiPdVWqeFsyH7roUKMGt-gMXcq2EopMnyzgqFblqZ02xdctZfaWvfw2tjd-6UcczKKw8x9r4PVjPaDgcEvuedMsPcG3vV~IpWvwk0xsbzX9VDIKnWReqXwHWKvcugQumb6Num2EPlcQYHor6wOV7gZXs4YHae21bmZRdYV2Bboa3dy8xt0jTTHjJUXdDlMtO0xCQxHC6Ma85dzlm~7M3f4OSq-YonCIHVv0CMKunonnCEokiRmVliLmId4NITh99aR2D6tR4sguvpU-zdc1L-ACHz8b~CYdOKPyaBQKpuvQVANBSFnFECJCpH381QG~CnF1MepHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Cameras',
      from: 89,
      id: 2,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/3722/0ada/db935c4b51e951193ddd1064f61e7b77?Expires=1704067200&Signature=CmPVzd9s6i7F8wU98autx4Esc6~Jv20GyhHsmlx9BbYzIXiaAOfTtbwnA9U2I~nN7ZCKd6tZYAB3us19ZBr-nD~QCD~CHjs-2LF3q0SrDWXEEB~lrTq3V3TJX8zrxLPivS49Hlc7uHGvRzN-bco0YWaYNlndMi2-71mAucrWaLUi0dpHpRNNnpOGOx4XgGVFVVeQoY9FfFV35dJTtRZinYOXXAt1TSiFxg~U4frBXhCgnF~kDSqZgTxEyA-vyt8V2PZsu7WsJ~uE3nsaAXUtRXlANIG2twKgEOXBcHvJcQBUNIIqpzUcpkq8NPIJJM2PkK3~DddNWxlatHaiTW7T2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Headphones',
      from: 10,
      id: 3,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/7984/cd83/b66e289400004efec8d3c212c576efd7?Expires=1704067200&Signature=RRHArT2S9RuDYd9VCk1j4AC~qgpkxlzA1JcXINit1Fj8qGNM7H-TWj11kq0bM35XQNjQIJI7TOzBAfGn5BmP4~-UJmoYLQ1vgLGPiTaZ24DQz1gJ0x~4EtSuXHYB4K429tFHxI5YigkyivBnkRx0YMWGBKfK-ruHS1mTR1b9tKixT6-n1UAiKHq15w0XPje-nUaaHSo-iOFNkYiHTlBOaAj5TcH1ArGWTGhjlptp7xKDV9qm8v6o5Y1g67imbbi4Lelc3KJ-eXrCW1j-JpwXnapnEV31hcfCMjuIE6G0WvJN6QQ-wv~wwJ9HdkkMhz81x1Q-Pa964kvW8anvwIXw1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Smart watchess',
      from: 90,
      id: 4,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/fd01/d17a/7844418a11051c24070081697c1e9a58?Expires=1704067200&Signature=j3ONQFVWlB7pVAfz-IYV569FyerBqf8i28hwjDKpj0bjrTIpAKIhu1wdtALb9QGhLCgBaknFYglaccI0mKPDpV0aawAiE05NQY9kJDmk5GRVK7X19h24-NCOwOcqJZIDaRC00lH7A3URyxyJweG4MmDEtpaNNHFukAdiz3F8KlJVekEAcJ75HUTMTO3Wfq2BecwKqs1EEA3YuKjYirSVq~J46SEAcC8XN6nx3fa9THUV8~~QjX-Kv6xUe0Mazp57vrXcrPQqnhxjaRcUyNZo2XdPm5cC4oKKC75c7LNqFFnBJ9Z-RaLesemBZ-r7-E2Cl6KHzT9BOB8L-DCQNmY2qQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Gaming set',
      from: 35,
      id: 5,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/f16c/3be3/67d46067797d63f72c5d238bab2c834f?Expires=1704067200&Signature=dfN0vUZK-ugFGt~rk-wHVxbyEMu1n7gYymjFwWXWQN~HNT9Qn6k4CtiRFVheF2zd-X-vXO3IWYrJvN2x1K-Ede9TIyyVBfEJByTn2yBBYAkH-PFSGR1P6e-3ULEKKfDRs2YZr11wtq3cjNDbqVDPqnCaMIQtvMKHOo1OODtvQwiA8M9tjXXjgYl9gNl6SODT~b8rENd2USwQGg0UmIFj004MwgGLbvNTycL5Z6Fan~aGDVVX-A4E2SVcAP8~6LKcd1Plu9bKfSjK3NK4hUF6oDHpey6VRdFk2Q-f-hkItOmBe4Umm-NHIq8cqb0CzklqGyloE666N2U69Vl59omF5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Laptops & PC',
      from: 340,
      id: 6,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/d5df/9baf/5b845d5b649289426578b53ebaef4c65?Expires=1704067200&Signature=SRMnL28y4Obp2egwomL4gqdWYlKqdsK4F07Mrvx9m-L6tymDSUxgRoPel6hsWBacR8jXBj4zXqsNS3-JTr2gsg0ajCpskHg-TWiuwpxj7xZ4ai0FNsBqu79kw8xaD-N2cwyyDm33RtqonE1IdTzJ8KPBortmgWCBexrlPV~nnmmERF8Ot-SARu205KDjCBfUnuMTMfhZpK6B1xem1nJFeZsQk1RjGwGkb1qjo50Iu5-0sj2Bwg3Cp6yEGkHoR3xvzjIURtF~xphl58XxmqQSqqtwXeuDcrga-L6-j4JnWAXhs2-XLhF~y1z1p2Lg7DBlloUxfywZn0VNp3AyzEly3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Smartphones',
      from: 19,
      id: 7,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/01ad/73c0/a2d288ce5bd52ddfac2945120df5102b?Expires=1704067200&Signature=nEEMwDecKgWM7kXipSn2Gu3dvywtSXa0mBvAzd4G2N7~3743SsQ5iXjX2deWJly5T3njvHIRnvs9RfTTmoLzbnn--5VgPSJGIbhTrsTILu36K~kY8Ppaic9Qis5MUPgm0M3a3pQ-zt5u1yudD2~vGI99-6vtcNjSYsEg65VTQxTAlet5oAw5l4eatt18Wj8EmCsMQBbh~WHkWn0U2kXmf-Fjj45hhY~DELETZ8z7NbWZAHvQnWa0aNWwaUcz7zfN8yEyX8Y-owTHr2~r4inpiB-9g~qIlfjiJ0cwTb9j9bk2qYvLcqvtEjrpwgm8lFD50H6JL-3Tpztuf1KpN04g~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      category: 'Electric kattle',
      from: 240,
      id: 8,
    },
  ];

  return (
    <div className="bg-white flex justify-between h-64 rounded-lg border">
      <div className="flex w-64 flex-col relative">
        <img
          src="https://res.cloudinary.com/dlfwgaprv/image/upload/v1703357007/ejemplos/cat2_usr4jn.png"
          alt=""
          className="absolute w-full h-full"
        />
        <div className="z-10 p-5">
          <h2 className="text-xl font-semibold w-24 mb-5">
            Consumer electronics and gadgets
          </h2>
          <button className="font-medium p-4 rounded-md border-white bg-white hover:bg-slate-100">
            Source Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white px-[1.25rem] py-[0.5rem] border h-full flex gap-3 justify-between items-end hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="h-full">
              <h3>{category.category}</h3>
              <span className="text-[#8B96A5] text-[13px]">
                From USD {category.from}
              </span>
            </div>
            <div className="w-[82px] h-[82px] p-2">
              <img src={category.img} alt={category.category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
