import React, { FC } from "react";
import IndexLayout from "../../layouts/IndexLayout/IndexLayout";
import styles from "./AboutPage.module.css";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => (
  <div className={styles.AboutPage}>
    <IndexLayout>
      <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="py-7">
          <div className="container">
            <div className="row align-items-center mt-5">
              <div className="col-lg-12 ms-auto mt-lg-0 px-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <h1>About</h1>
                  </div>
                  <div className="card-body text-center py-5">
                    <h3>Myanmar Translation</h3>
                    <p>
                      ၁၉၄၉ ခုနှစ်၊ မေလ ၁၁ ရက်တွင် ဆရာတော် အရှင်သေဋ္ဌိလ
                      ပါဠိဘာသာမှ မြန်မာဘာသာသို့ ပြန်ဆိုသော ပထမအကြိမ် စာမူများကို
                      မိမိကိုယ်တိုင် စာပေလောက စာတိုက်မှ ထုတ်သော စာအုပ်တွင်
                      ဖတ်ရှုပြီး ကွန်ပျူတာဖြင့် ပြန်လည်​ ရိုက်ယူထားခြင်း
                      ဖြစ်သည်။
                    </p>
                    <h3 className="mt-5">English Translation</h3>
                    <p>
                      For the latest English Translation, I copied from the
                      website "The Buddha's Path of Wisdom translated from the
                      Pali by Acharya Buddharakkhita"
                      https://www.accesstoinsight.org.
                    </p>
                    <h3 className="mt-5">Pali</h3>
                    <p>
                      I copied from some websites. ( I forgot to bookmark the website links.)
                    </p>
                    <h3 className="mt-5">Thanks</h3>
                    <p>
                      Thanks mom, dad, brother, sisters for supporting me and understanding. With your support all these valuable app successfully developed.
                    </p>
                    <p>
                      မြတ်စွာဘုရား , တရား , သံဃာ တို့အား ရိုသေမြတ်နိုး လက်အုပ်မိုး၍ ရှိခိုးကန်တော့ပါသည်။
                      မိမိ ယခု ပြုရသော ကုသိုလ် အစုစု တို့က်ို ယခု ဘဝတွင် တော်စပ်သော
                      ကျေးဇူးရှင် မွေးမိခင်  ေဒါ်မြင့်မြင့်နွယ် နှင့် ဖခင် ဦးမြင့်လွင်
                      တို့အား အမှူးထား၍ 
                      ခင်ပွန်းကြီးဆယ်ပါး အပါအဝင် မိသားစု ထောက်ပံ့ပေးခဲ့သော ကျေးဇူးရှင် အကို ထင်လင်းသူ , 
                      ညီမလေး Xiao Li Lv နှင့် မေသွယ်ငြိမ်း တို့ အကူအညီ , ဝမရှိဘဲ ဝိဆိုတာ မရှိသကဲ့သို့ ဘဝခရီးတလျှောက် သင်ယူခဲ့ရသည့် ဆရာသမားတို့အား ​ဦးထိပ်ထား၍
                      ကမ္ဘာသူ ကမ္ဘာသား လူ နတ် ဗြဟ္မာ ပုဂ္ဂိုလ် သတ္တဝါ တို့အား အမျှ အမျှ အမျှ ပေးဝေပါ၏။ <br/> အမျှ ရကြသည် ဖြစ်၍ ကိုယ် စိတ် နှစ်ဖြာ ကျန်းမာ ချမ်းသာကြပါစေ။
                    </p>
                    <h3 className="mt-5">ဆု</h3>
                    <p>
                      ဣဒံ မေ ပုညံ အာသဝက္ခယာ ဝဟံ ဟောတု။ 🙏🏻 
                    </p>
                    <h3 className="mt-5">Feedback</h3>
                    <p>
                      At the first time, I didn't know that the project will be known. Sorry for any spelling mistakes that I made. I tried my best
                      to share this with clean state. For anything feedback, please feel free to let me know. {" "}
                      <a
                        href="https://i-am-xiao-yuan-lv.web.app"
                        target="_blank"
                      >
                        @_XiaoYuanLv
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </IndexLayout>
  </div>
);

export default AboutPage;
