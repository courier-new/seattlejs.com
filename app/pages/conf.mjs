export default function ({ html }) {
  //console.log(events)
  return html`
    <my-layout>
      <div id="page">
        <!-- no title needed -->
        <div class="page-body">
          <div><img src="/_public/images/seattlejsconf-2023-logo.png" alt="logo for SeattleJS Conf 2023"/></div>
          <h2>What</h2>
          <p>This is the 2nd official SeattleJS conference. We are a 1-day conference for web developers that will feature 12 amazing speakers, covering the latest in web and JS development. The last time we did this was when the CascadiaJS folks took a break in 2017. They're taking another break, so we're back!</p>
          <h2>When</h2>
          <ul>
            <li>Tuesday, August 8 2023</li>
            <li>Doors Open at 8am</li>
            <li>Talks run from 9am - 5pm</li>
            <li>Closing Party runs from 7pm - midnight</li>
          </ul>
          <h2>Where</h2>
          <div><img src="https://2022.cascadiajs.com/images/past/cjs18-sponsor.jpg" alt="Amazon Meeting Center"/></div>
          <ul>
            <li>The Amazon Meeting Center</li>
            <li><a target="_blank" href="https://goo.gl/maps/vmFir1ayC8oo4pYr7?coh=178573&entry=tt">2031 7th Ave, Seattle, WA 98121</a></li>
            <li>Please use public transportation (bus or light rail) if possible.</li>
          </ul>
          <h2>Speakers</h2>
            <p>We can't wait to announce the rest of our line-up for the conference. And it's not too late to apply to speak! We are running an <a href="https://airtable.com/shrhxFyPF0ZD66jpt">OPEN CFP</a> that closes June 2. The full line-up will be announced on Monday, June 4.</p>
            <div style="display:flex">
              <view-speaker name="Jason Lengstorf" company="Learn With Jason" twitter="jlengstorf" photo="jason-lengstorf.jpg"></view-speaker>
              <view-speaker name="Adam Argyle" company="Google" twitter="argyleink" photo="adam-argyle.jpg"></view-speaker>
              <view-speaker name="Kevin Whinnery" company="Deno" twitter="kevinwhinnery" photo="kevin-whinnery.jpg"></view-speaker>
              <view-speaker name="Josh Goldberg" company="typescript-eslint" twitter="JoshuaKGoldberg" photo="josh-goldberg.jpg"></view-speaker>
            </div>
          <h2>Sponsors</h2>
          <p>Please email info@seattlejs.com if you are interested in learning about sponsoring this event!</p>
          <div style="display:flex">
            <view-sponsor name="AWS" url="https://docs.amplify.aws/" image="aws.png"></view-sponsor>
            <view-sponsor name="Courier" url="http://courier.com?utm_campaign=q2-fy23-conference-seattlejsconf&utm_source=conference&utm_medium=website" image="courier.png"></view-sponsor>
          </div>
          <h2>Tickets</h2>
          <tito-widget event="event-loop/seattlejs-conf-2023"></tito-widget>
        </div>
      </div>
    </my-layout>
  `
}