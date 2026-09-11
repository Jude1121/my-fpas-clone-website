<!-- src/lib/components/FoundingMembersGrid.svelte -->
<script>
  import aia from '$lib/assets/members/aia.svg';
  import axa from '$lib/assets/members/axa.svg';
  import kgi from '$lib/assets/members/kgi.svg';
  import greatEastern from '$lib/assets/members/great-eastern.svg';
  import johnHancock from '$lib/assets/members/john-hancock.svg';
  import limTan from '$lib/assets/members/lim-tan.svg';
  import lumChang from '$lib/assets/members/lum-chang.svg';
  import maybank from '$lib/assets/members/maybank.svg';
  import ntucIncome from '$lib/assets/members/ntuc-income.svg';
  import uob from '$lib/assets/members/uob.svg';
  import ocbc from '$lib/assets/members/ocbc.svg';
  import phillip from '$lib/assets/members/phillip.svg';
  import prudential from '$lib/assets/members/prudential.svg';
  import standardChartered from '$lib/assets/members/standard-chartered.svg';
  import dbs from '$lib/assets/members/dbs.svg';
  import hsbc from '$lib/assets/members/hsbc.svg';
  import overseas from '$lib/assets/members/great-eastern.svg';
  import ubs from '$lib/assets/members/ubs.svg';
  import vickersBallas from '$lib/assets/members/DBS_Vickers_logo.png';

  const members = [
    { logo: aia, name: 'American International Assurance Co. Ltd.' },
    { logo: axa, name: 'AXA Life Insurance Co. Ltd.' },
    { logo: kgi, name: 'Fraser Securities Pte Ltd (now part of KGI Fraser Pte Ltd)' },
    { logo: greatEastern, name: 'Great Eastern Life Assurance Co. Ltd.' },
    { logo: johnHancock, name: 'John Hancock Life Assurance Company Ltd (now part of Manulife (Singapore) Pte Ltd)' },
    { logo: limTan, name: 'Lim & Tan Securities Pte Ltd' },
    { logo: lumChang, name: 'Lum Chang Securities Pte Ltd (defunct)' },
    { logo: maybank, name: 'Maybank Singapore' },
    { logo: ntucIncome, name: 'NTUC Income Insurance Co-operative Ltd' },
    { logo: uob, name: 'Overseas Union Bank Ltd (now part of United Overseas Bank Limited)' },
    { logo: ocbc, name: 'Overseas-Chinese Banking Corporation Ltd.' },
    { logo: phillip, name: 'Phillip Securities Pte. Ltd.' },
    { logo: prudential, name: 'Prudential Assurance Co. Singapore (Pte) Ltd.' },
    { logo: standardChartered, name: 'Standard Chartered Bank' },
    { logo: dbs, name: 'The Development Bank of Singapore' },
    { logo: hsbc, name: 'The Hongkong and Shanghai Banking Corporation Ltd' },
    { logo: overseas, name: 'The Overseas Assurance Corporation Ltd (now part of Great Eastern Life Assurance Co. Ltd.)' },
    { logo: ubs, name: 'UBS AG' },
    { logo: vickersBallas, name: 'Vickers Ballas Holdings Limited (now part of DBS Securities Pte Ltd)' },
  ];
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20 lg:mt-20">
  <div class="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12">
    {#each members as member (member.name)}
      <div class="flex flex-col items-start">
        <div class="h-20 w-full flex items-center justify-center mb-4">
          <img
            src={member.logo}
            alt={member.name}
            class="max-h-25 max-w-[160px] object-contain"
          />
        </div>
        <p class="text-sm text-[#323F4B] leading-snug text-center">
          {member.name}
        </p>
      </div>
    {/each}
  </div>
</section>