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
                    <p>
                      ၁၉၄၉ ခုနှစ်၊ မေလ ၁၁ ရက်တွင် ဆရာတော် အရှင်သေဋ္ဌိလ
                      ပါဠိဘာသာမှ မြန်မာဘာသာသို့ ပြန်ဆိုသော ပထမအကြိမ် စာမူများကို
                      မိမိကိုယ်တိုင် စာပေလောက စာတိုက်မှ ထုတ်သော စာအုပ်တွင်
                      ဖတ်ရှုပြီး ကွန်ပျူတာဖြင့် ပြန်လည်​ ရိုက်ယူထားခြင်း
                      ဖြစ်သည်။
                    </p>
                    <p>
                      For the latest English Translation, I copied from the
                      website "The Buddha's Path of Wisdom translated from the
                      Pali by Acharya Buddharakkhita"
                      https://www.accesstoinsight.org.
                    </p>
                    <p>
                      Thanks mom and dad. Thanks also my family, relatives,
                      teachers and friends. With their help, these all happened.
                    </p>
                    <p>
                      မိမိ ယခု ပြုရသော ကုသိုလ် အစုစု တို့က်ို ယခု ဘဝတွင်
                      ကျေးဇူးရှင် မွေးမိခင် ဒေါ်မြင့်မြင့်နွယ် ဖခင် ဦးမြင့်လွင်
                      တို့အား အမှူးထား၍ ယခု ဘဝတွင် ကျေးဇူးရှိသော အကို တော်စပ်သော
                      ကိုထင်လင်းသူ လည်း အပါအဝင် သုံးဆယ့်တစ်ဘုံ တွင်
                      ကျင်လည်ကြကုန်သော သတ္တဝါ တို့အား အမျှပေးဝေ ပါ၏။
                    </p>
                    <p>
                      ဆုတောင်း 🙏🏻 မိမိ ယခု ပြုရသော ဓမ္မအလှူ ကုသိုလ် တို့သည်
                      နိဗ္ဗာန် ရောက်ကြောင်း အထောက်အပံ့ ဖြစ်ပါစေသတည်း။
                    </p>
                    <p>
                      At the first time, I feel like to create the one like
                      hobby (I mean I did not know that everyone would know the
                      app.). Sorry for anything spelling occurs. I tried my best
                      to share this with clean state. For anything spelling
                      errors, please feel free to let me know.{" "}
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
