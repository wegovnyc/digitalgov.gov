const neededFiles = [
  "2014-07-07-user-experience-ux-vs-customer-experience-cx-whats-the-dif.md",
  "2014-07-01-multilingual-digital-content.md",
  "2012-08-29-digital-government-strategy-milestones-report.md",
  "2014-05-13-what-is-a-terms-of-service-and-how-do-i-get-one.md",
  "2014-01-09-top-eight-best-practices-for-federal-contact-centers.md",
  "2013-11-14-ideation-challenges.md",
  "2013-11-06-software-and-apps-challenges.md",
  "2013-10-31-creative-challenge-contests.md",
  "2015-12-14-government-customer-service-update-webinar-recap.md",
  "2015-08-14-federal-student-aid-customer-experience-journey-a-recap.md",
  "2015-09-11-how-will-you-celebrate-customer-service-week.md",
  "2015-07-22-how-the-nationals-customer-experience-principles-can-be-a-home-run-for-agencies.md",
  "2015-05-29-getting-to-know-your-users-tips-and-tricks-from-veterans-affairs.md",
  "2015-01-09-personas-101.md",
  "2015-04-06-using-personas-to-better-understand-customers-usa-gov-case-study.md",
  "2015-08-12-journey-mapping-the-customer-experience-a-usa-gov-case-study.md",
  "2015-09-17-using-customer-feedback-to-improve-healthcare-gov.md",
  "2015-12-09-connecting-with-the-social-and-behavioral-sciences-team.md",
  "2013-10-31-technology-demonstration-and-market-stimulation-challenges.md",
  "2016-01-04-how-agile-development-can-benefit-federal-projects.md",
  "2016-01-14-why-people-contribute-to-federal-tech-projects-and-how-you-can-provide-a-good-experience.md",
  "2015-01-16-how-to-run-an-agile-project-in-government.md",
  "2013-11-14-ideation-challenges.md",
  "2015-12-07-cx-data-in-action-series-case-study-1.md",
  "2015-06-01-finding-the-best-mobile-moment-is-the-first-stepping-stone-to-anytime-anywhere-government.md",
  "2013-03-21-saferbus-mobile-usability-case-study.md",
  "2014-11-21-results-2014-federal-user-experience-survey.md",
  "2014-04-16-how-to-tell-your-agencys-story-plainly.md",
  "2016-03-29-usagovs-step-by-step-guide-to-making-snapchat-stories-as-accessible-as-possible.md",
  "2015-03-02-persona-development-case-study-nci-and-spanish-language-outreach.md",
  "2015-03-02-persona-development-case-study-nci-and-spanish-language-outreach.md",
  "2014-08-12-heat-mapping-case-study-epa-gov-homepage.md",
  "2014-08-12-heat-mapping-case-study-epa-gov-homepage.md",
  "2014-08-22-api-usability-case-study-openfda.md",
  "2014-08-22-api-usability-case-study-openfda.md",
  "2014-06-06-consumer-action-handbook-usability-case-study.md",
  "2014-06-06-consumer-action-handbook-usability-case-study.md",
  "2014-08-19-redesigning-with-customer-feedback-child-support-enforcement-usability-case-study.md",
  "2014-08-19-redesigning-with-customer-feedback-child-support-enforcement-usability-case-study.md",
  "2014-07-02-using-top-tasks-to-be-top-notch-federal-reserve-board-usability-case-study.md",
  "2014-07-02-using-top-tasks-to-be-top-notch-federal-reserve-board-usability-case-study.md",
  "2014-07-18-improving-content-increasing-participation-a-nara-usability-case-study.md",
  "2014-07-18-improving-content-increasing-participation-a-nara-usability-case-study.md",
  "2014-07-01-using-analytics-to-create-change-usa-gov-usability-case-study.md",
  "2014-07-01-using-analytics-to-create-change-usa-gov-usability-case-study.md",
  "2014-04-14-noaa-national-ocean-service-usability-case-study.md",
  "2014-04-14-noaa-national-ocean-service-usability-case-study.md",
  "2014-04-09-usability-case-study-fda-consumer-graphics.md",
  "2014-04-09-usability-case-study-fda-consumer-graphics.md",
  "2014-04-02-kids-gov-usability-case-study.md",
  "2014-04-02-kids-gov-usability-case-study.md",
  "2014-03-18-data-gov-usability-case-study.md",
  "2014-03-18-data-gov-usability-case-study.md",
  "2013-07-02-fueleconomy-gov-usability-case-study.md",
  "2013-07-02-fueleconomy-gov-usability-case-study.md",
  "2013-04-29-atf-gov-usability-case-study.md",
  "2013-04-29-atf-gov-usability-case-study.md",
  "2013-02-19-contractor-vehicle-navigator-usability-case-study.md",
  "2013-02-19-contractor-vehicle-navigator-usability-case-study.md",
  "2013-01-23-commerce-departmental-library-usability-case-study.md",
  "2013-01-23-commerce-departmental-library-usability-case-study.md",
  "2013-03-22-regulations-gov-usability-case-study.md",
  "2013-03-22-regulations-gov-usability-case-study.md",
  "2013-03-21-saferbus-mobile-usability-case-study.md",
  "2013-03-21-saferbus-mobile-usability-case-study.md",
  "2012-12-17-sam-gov-usability-test-study.md",
  "2012-12-17-sam-gov-usability-test-study.md",
  "2013-07-02-business-usa-gov-usability-case-study.md",
  "2013-07-02-business-usa-gov-usability-case-study.md",
  "2013-06-19-army-mil-usability-case-study.md",
  "2013-06-19-army-mil-usability-case-study.md",
  "2012-10-15-gsa-fedramp-usability-case-study.md",
  "2012-10-15-gsa-fedramp-usability-case-study.md",
  "2012-12-14-irs-usability-case-study.md",
  "2012-12-14-irs-usability-case-study.md",
  "2012-10-15-gsa-intranet-insite-usability-case-study.md",
  "2012-10-15-gsa-intranet-insite-usability-case-study.md",
  "2012-10-15-office-of-natural-resources-revenue-usability-case-study.md",
  "2012-10-15-office-of-natural-resources-revenue-usability-case-study.md",
  "2012-11-05-nsf-gov-usability-case-study.md",
  "2012-11-05-nsf-gov-usability-case-study.md",
  "2012-12-06-weather-gov-usability-case-study.md",
  "2012-12-06-weather-gov-usability-case-study.md",
  "2012-11-30-socialgov-summit-highlights-accessibility-challenges.md",
  "2014-05-13-what-is-a-terms-of-service-and-how-do-i-get-one.md",
  "2014-05-13-what-is-a-terms-of-service-and-how-do-i-get-one.md",
  "2013-05-06-cracking-the-mobile-contracting-nut.md",
  "2013-08-22-mobile-product-testing-guidelines.md",
  "2013-05-06-cracking-the-mobile-contracting-nut.md",
  "2013-08-22-mobile-product-testing-guidelines.md",
  "2014-07-29-trends-on-tuesday-avoid-the-app-graveyard.md",
  "2015-05-04-helpful-resources-to-help-make-your-content-mobile-friendly.md",
  "2013-07-25-why-nci-moved-to-a-structured-content-model.md",
  "2015-03-20-structured-content-in-government-how-hhs-and-nci-are-getting-started.md",
  "2014-12-11-defense-finance-accounting-services-use-hhs-code-to-make-mobile-friendly-tables.md",
  "2014-10-30-hhs-conquers-tables-in-a-responsive-design.md",
  "2014-05-05-government-open-and-structured-content-models-are-here.md",
  "2014-06-09-what-structured-content-can-do-for-you-webinar-recap.md",
  "2014-10-27-open-and-structured-content-models-workshop-recap.md",
  "2014-08-20-top-5-reasons-to-use-government-wide-open-and-structured-content-models.md",
  "2013-10-28-always-future-ready-the-benefits-of-open-content-models-and-structured-data-webinar.md",
  "2015-06-01-the-content-corner-humanizing-structured-content.md",
  "2015-04-15-mobilegeddon-government-edition.md",
  "2014-09-03-mobile-web-templates-how-to-use-open-source-cms-to-implement-responsive-web-design-webinar-recap.md",
  "2015-06-23-trends-on-tuesday-global-efforts-underway-to-update-mobile-accessibility-guidelines.md",
  "2014-12-22-how-six-agencies-are-crowdsourcing-with-mobile-apps.md",
  "2015-06-18-noaas-crowdmag-app-citizen-science-on-the-go.md",
  "2015-03-05-explore-iconic-overseas-world-war-ii-sites-with-abmc-apps.md",
  "2014-08-08-design-sketching-the-easiest-prototype-method-ever.md",
  "2014-05-22-how-to-make-a-mobile-paper-prototype.md",
  "2013-08-22-mobile-product-testing-guidelines.md",
  "2015-06-09-the-emulator-dilemma-can-mobile-device-testing-be-completed-without-mobile-devices.md",
  "2014-11-18-trends-on-tuesday-speed-matters-when-measuring-responsive-web-design-performance-load-times.md",
  "2013-03-21-saferbus-mobile-usability-case-study.md",
  "2012-07-11-aids-gov-responsive-design.md",
  "2014-06-05-cdcs-digital-front-door-goes-responsive.md",
  "2014-10-21-responsive-web-design-challenges-webinar-recap.md",
  "2014-04-16-how-to-tell-your-agencys-story-plainly.md",
  "2014-10-30-cyber-house-of-horrors.md",
  "2013-05-31-twitters-two-step-verification-process.md",
  "2013-04-25-government-must-respond-rapidly-to-social-media-hacking.md",
  "2015-06-05-using-section-508-guidance-to-improve-the-accessibility-of-government-services.md",
  "2012-10-01-automated-translation-good-solution-or-not.md",
  "2015-06-05-using-section-508-guidance-to-improve-the-accessibility-of-government-services.md",
  "2013-11-21-mobile-product-compatibility-and-functional-testing-101.md",
  "2014-02-28-mobile-tester-usability-short-reads-learning-from-others-mistakes.md",
  "2013-12-16-the-test-case-write-it-once-test-many-times.md",
  "2013-10-29-which-devices-should-i-test-with.md",

  "2012-07-02-mobile-webinar-series-recap-responsive-design.md",
"2012-08-22-agency-digital-strategy-pages.md",
"2012-08-12-agile-sprinting-to-digital-governance-recommendations.md",
"2012-11-19-case-study-how-gsa-launched-social-media-registry.md",
"2012-07-16-healthfinder-gov-api.md",
"2012-05-07-find-free-video-stock-footage.md",
"2012-07-09-how-to-implement-an-apps-challenge.md",
"2012-06-20-medlineplus-mobile-evaluation.md",
"2012-08-21-sms-or-short-message-service.md",
"2012-11-21-how-nasa-chose-a-new-content-management-system.md",
"2012-11-21-how-the-department-of-education-automated-publication-of-press-releases.md",
"2012-07-09-how-to-implement-an-apps-challenge.md",
"2012-07-09-how-to-improve-an-apps-challenge.md",
"2012-07-09-how-to-implement-an-apps-challenge.md",
"2012-04-26-noaas-release-mako-app.md",
"2012-04-26-noaas-release-mako-app.md",
"2012-11-05-centers-for-disease-control-content-syndication.md",
"2012-08-21-sms-or-short-message-service.md",
"2012-08-03-mobile-first-webinar-recap.md",
"2012-05-07-find-free-video-stock-footage.md",
"2012-08-12-agile-sprinting-to-digital-governance-recommendations.md",
"2012-07-26-introduction-to-apis.md",
"2011-06-21-making-mobile-gov-project.md",
"2012-02-22-my-tsa-mobile-app.md",
"2011-06-21-making-mobile-gov-project.md",
"2012-07-26-introduction-to-apis.md",
"2012-07-13-irs2go-app.md",
"2012-08-21-sms-or-short-message-service.md",
"2012-05-12-national-contact-centers-text-message-program.md",
"2012-10-19-feds-shed-light-on-dark-social.md",
"2012-10-25-gsas-child-care-information-portal.md",
"2012-07-13-osha-heat-safety-tool-app.md",
"2012-02-22-my-tsa-mobile-app.md",
"2012-08-12-agile-sprinting-to-digital-governance-recommendations.md",
"2012-04-26-noaas-release-mako-app.md",
"2012-08-22-agency-digital-strategy-pages.md",
"2012-08-12-agile-sprinting-to-digital-governance-recommendations.md",
"2012-07-02-mobile-webinar-series-recap-responsive-design.md",
"2013-06-11-responsive-design.md",
"2013-07-15-digital-metrics-for-federal-agencies.md",
"2013-07-29-how-to-create-open-structured-content.md",
"2013-10-30-content-management-systems-toolkit.md",
"2013-05-25-functionality-and-usability-testing-resources.md",
"2012-07-09-how-to-implement-an-apps-challenge.md",
"2012-07-09-how-to-improve-an-apps-challenge.md",
"2012-07-09-how-to-implement-an-apps-challenge.md",
"2014-03-11-crowdsource-ideas-with-new-competition-platform.md",
"2013-10-28-federal-contact-center-regulations-and-directives.md",
"2014-02-24-tumblr-a-flexible-social-media-platform.md",
"2013-04-26-how-to-do-usability-testing-with-kids.md",
"2014-02-19-10-tips-for-better-hallway-usability-testing.md",
"2014-03-27-gsa-introduces-news-genius-to-decode-government-web.md",
"2014-01-20-mobile-gov-user-experience-resources-and-design-tools.md",
"2014-05-27-video-blog-part-3-sarah-crane-usa-gov.md",
"2014-04-04-heatmapping-tools-show-whats-hot-on-your-pages.md",
"2013-07-29-how-to-create-open-structured-content.md",
"2013-09-30-mobile-first.md",
"2014-03-24-why-go-responsive-heres-what-feds-are-saying.md",
"2014-10-28-trends-on-tuesday-8-ways-to-format-tables-for-responsive-web-design.md",
"2014-11-07-welcome-to-user-experience-month.md",
"2014-04-04-heatmapping-tools-show-whats-hot-on-your-pages.md",
"2013-05-13-federal-mobile-code-sharing-catalog-is-here.md",
"2014-06-24-trends-on-tuesday-are-mobile-devices-the-center-of-social-universe.md",
"2014-01-02-fccs-speed-test-app.md",
"2014-12-08-crowdsourcing-month-an-overview.md",
"2014-09-25-saving-the-whales-with-just-your-smartphone-west-coast-edition.md",
"2013-11-14-noaa-release-mako-now-on-ios.md",
"2014-12-04-find-fuel-during-disasters-with-lantern-live-app.md",
"2014-01-16-fema-app-adds-disaster-reporter-feature.md",
"2012-02-22-my-tsa-mobile-app.md",
"2014-08-18-how-to-choose-a-user-experience-technique.md",
"2014-12-08-from-taste-testers-to-explorers-developing-personas-for-open-opportunities.md",
"2015-03-03-trends-on-tuesday-google-to-implement-mobile-friendly-rankings.md",
"2014-08-15-get-out-of-the-jargon-trap-plain-language-training-can-help.md",
"2015-03-31-trends-on-tuesday-smartphone-market-growth-makes-mobile-friendly-a-must.md",
"2015-03-04-what-is-the-digital-analytics-program-dap.md",
"2012-10-25-gsas-child-care-information-portal.md",
"2015-04-30-mobile-friendly-park-websites-on-nps-gov.md",
"2015-02-12-building-brick-by-brick-ed-govs-website-redesign-and-mobile-implementation.md",
"2015-04-17-focus-groups-are-they-right-for-you.md",
"2015-03-31-trends-on-tuesday-smartphone-market-growth-makes-mobile-friendly-a-must.md",
"2015-05-26-5-crucial-steps-for-conducting-an-effective-customer-interview.md",
"2015-02-12-building-brick-by-brick-ed-govs-website-redesign-and-mobile-implementation.md",
"2015-04-30-mobile-friendly-park-websites-on-nps-gov.md",
"2015-01-29-how-government-will-accelerate-anytime-anywhere-services-and-information-in-2015.md",
"2015-01-29-how-government-will-accelerate-anytime-anywhere-services-and-information-in-2015.md",
"2015-05-15-government-services-through-a-life-events-approach.md",
"2014-08-21-paper-prototyping-ptsd-coach.md",
"2015-02-19-irs2go-app-provides-multi-symptom-relief-for-tax-anxiety.md",
"2014-09-25-saving-the-whales-with-just-your-smartphone-west-coast-edition.md",
"2012-07-13-osha-heat-safety-tool-app.md",
"2012-02-22-my-tsa-mobile-app.md",
"2013-07-31-mobile-product-accessibility-testing-resources.md",
"2013-09-30-mobile-first.md",
"2014-06-24-trends-on-tuesday-are-mobile-devices-the-center-of-social-universe.md",
"2014-06-12-three-ways-agencies-are-using-social-media-in-mobile-products.md",
"2014-06-12-three-ways-agencies-are-using-social-media-in-mobile-products.md",
"2013-10-24-dolphin-and-whale-apps-from-noaa-fisheries.md",
"2012-04-26-noaas-release-mako-app.md",
"2015-01-29-be-a-citizen-scientist-with-noaas-crowdmag-app.md",
"2015-06-16-trends-on-tuesday-native-app-lessons-from-the-crowdsource-mobile-testing-program.md",
"2013-11-21-create-section-508-compliant-videos-on-your-government-websites.md",
"2015-04-30-digitalgovs-inaugural-podcast-how-ivr-supports-contact-centers.md",
"2015-01-05-great-customer-service-in-140-characters-askfafsa-twitter-chats.md",
"2015-04-24-meeting-customer-needs-through-social-media.md",
"2013-10-17-hosting-successful-federal-twitter-chats.md",
"2015-05-29-a-conversation-with-omb-on-customer-service.md",
]

var fs = require('fs');
var path = require('path');
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};
walk("./content/news/2012", function(err, results) {
  if (err) throw err;
  console.log(results);
  results.forEach(r => {
    let folderPath = r.substring(0, r.lastIndexOf("/"));
    // console.log('@folderPath: ', folderPath);
    let fileName = r.replace(`${folderPath}/`, "")
    // console.log('@fileName: ', fileName);
    // console.log('@r: ', typeof r);
    if (neededFiles.includes(fileName)) {
      console.log('@saving', fileName);
    } else {
      fs.unlinkSync(r)
      console.log('@unlinking');
      
    }
  })
});


