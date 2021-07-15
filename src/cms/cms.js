import CMS from 'netlify-cms-app';
// import bootstrap
// idea from
// https://ibywaks.medium.com/how-to-customize-content-preview-on-netlify-cms-with-gridsome-26e23561021
import styles from '!css-loader!sass-loader!../styles/styles.scss';

// import templates
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ClassesSchedulePagePreview from './preview-templates/ClassesSchedulePagePreview';
import TeachersGroupsPagePreview from './preview-templates/TeachersGroupsPagePreview';
import PlansPagePreview from './preview-templates/PlansPagePreview';
import SundayClubPagePreview from './preview-templates/SundayClubPagePreview';
import EnrollSchoolPagePreview from './preview-templates/EnrollSchoolPagePreview';
import ContactsPagePreview from './preview-templates/ContactsPagePreview';
// layouts
import HeaderLayoutPreview from './preview-templates/HeaderLayoutPreview';
import FooterLayoutPreview from './preview-templates/FooterLayoutPreview';

// modals
import ThankYouPagePreview from './preview-templates/ThankYouPagePreview';

// register styles
CMS.registerPreviewStyle(styles.toString(), { raw: true });

// register templates
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('classes-schedule', ClassesSchedulePagePreview);
CMS.registerPreviewTemplate('teachers-groups', TeachersGroupsPagePreview);
CMS.registerPreviewTemplate('plans', PlansPagePreview);
CMS.registerPreviewTemplate('sunday-club', SundayClubPagePreview);
CMS.registerPreviewTemplate('enroll-school', EnrollSchoolPagePreview);
CMS.registerPreviewTemplate('contacts', ContactsPagePreview);
// layouts
CMS.registerPreviewTemplate('header', HeaderLayoutPreview);
CMS.registerPreviewTemplate('footer', FooterLayoutPreview);

// modals
CMS.registerPreviewTemplate('thank-you', ThankYouPagePreview);

// youtube widget
// additional component in markdown
// youtube video - from
// https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent
