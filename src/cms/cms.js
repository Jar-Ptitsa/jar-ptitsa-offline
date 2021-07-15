import CMS from 'netlify-cms-app';
// import bootstrap
// idea from
// https://ibywaks.medium.com/how-to-customize-content-preview-on-netlify-cms-with-gridsome-26e23561021
import styles from '!css-loader!sass-loader!../styles/styles.scss';


// import templates
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ThankYouPagePreview from './preview-templates/ThankYouPagePreview';
import ClassesSchedulePagePreview from './preview-templates/ClassesSchedulePagePreview';

// register styles
CMS.registerPreviewStyle(styles.toString(), { raw: true });

// register templates
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('thank-you', ThankYouPagePreview);
CMS.registerPreviewTemplate('classes-schedule', ClassesSchedulePagePreview);

// youtube widget
// additional component in markdown
// youtube video - from
// https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent
