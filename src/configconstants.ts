// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.study.babulilm';
    static appname = 'Babulilm';
    static desktopappname = 'Desktop';
    static versioncode = 1;
    static versionname = '1.0.0';
    static cache_update_frequency_usually = 420000;
    static cache_update_frequency_often = 1200000;
    static cache_update_frequency_sometimes = 3600000;
    static cache_update_frequency_rarely = 43200000;
    static default_lang = 'en';
    static languages: any = {
        en: 'English'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites: any = {
        student: {
            url: '',
            username: '',
            password: ''
        },
        teacher: {
            url: '',
            username: '',
            password: ''
        }
    };
    static font_sizes: any = [
        62.5,
        75.89,
        93.75
];
    static customurlscheme = 'moodlemobile';
    static siteurl = 'https://study.babulilm.co.uk';
    static sitename = 'Babulilm';
    static multisitesdisplay = '';
    static onlyallowlistedsites = false;
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://babulilm.co.uk/privacy-policy-gdpr';
    static notificoncolor = '#FF0000';
    static statusbarbg = false;
    static statusbarlighttext = false;
    static statusbarbgios = '#FF0000';
    static statusbarlighttextios = true;
    static statusbarbgandroid = '#FF0000';
    static statusbarlighttextandroid = true;
    static statusbarbgremotetheme = '#000000';
    static statusbarlighttextremotetheme = true;
    static enableanalytics = false;
    static enableonboarding = true;
    static forceColorScheme = '';
    static ioswebviewscheme = 'moodleappfs';
    static appstores: any = {
        android: 'com.study.babulilm',
        ios: 'id633359593',
        windows: 'moodle-desktop/9p9bwvhdc8c8',
        mac: 'id1255924440',
        linux: 'https://download.moodle.org/desktop/download.php?platform=linux&arch=64'
    };
    static compilationtime = 1602820343952;
    static lastcommit = '';
}
