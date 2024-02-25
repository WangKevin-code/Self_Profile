<script setup>
</script>
<template>
    <div class="row">
        <div class="col-sm-3">
            <div class="py-5 text-center">
                <img src="/src/Images/people.jpg" class="w-100 img-thumbnail" style="border-radius:50%" />
                <ul class="nav flex-column mt-2 fw-bolder">
                    <li class="nav-item">
                        <a class="nav-link">經歷 EXPERIENCE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">使用過的技術 SKILL</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">關於我 ABOUT ME</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="mb-4">
                <h3 class="head-title">經歷 EXPERIENCE</h3>
                <div class="timeline">
                    <div class="timeline-body">
                        <ul>
                            <li>
                                <div class="bullet"></div>
                                <h5 class="title">經歷2</h5>
                                <div class="contents">
                                    <u class="fw-bolder">台中精機服務期間擔任ICT助理工程師</u>
                                    <p>開發工廠監控系統、IOT資料串接、自動化系統</p>
                                </div>
                            </li>
                            <li>
                                <div class="bullet"></div>
                                <h5 class="title">經歷1</h5>
                                <div class="contents">
                                    <u class="fw-bolder">擔任ASP.NET MVC 台水官網駐點工程師</u>
                                    <p>維護系統問題排除、依需求修改功能</p>
                                </div>
                            </li>
                            <li>
                                <div class="bullet"></div>
                                <h5 class="title">畢業</h5>
                                <div class="contents">
                                    <u class="fw-bolder">畢業於國立勤益科技大學(2016~2020) 資訊工程學系</u>
                                </div>
                            </li>
                            <li>
                                <div class="bullet"></div>
                                <h5 class="title">實習</h5>
                                <div class="contents">
                                    <u class="fw-bolder">大學四年級上學期曾在數位商策擔任實習助理工程師</u>
                                    <p>製作Web、WinFrom UI</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <h3 class="head-title">使用過的技術 SKILL</h3>
                <div class="fw-bolder">
                    <p>
                        C#、.Net Core、ASP.NET MVC、WebAPI
                    </p>
                    <p>
                        MSSQL、Dapper、DB First
                    </p>
                    <p>
                        VueJs、HTML、CSS、JavaScript、Bootstrap、ChartJs
                    </p>
                    <p>
                        WinFrom、WPF
                    </p>
                </div>
            </div>
            <div class="mb-4">
                <h3 class="head-title">關於我 ABOUT ME</h3>
                <div>
                    <p>1998年出生，目前居住台中市北屯區。</p>
                    <p>平時閒暇時，喜歡健身運動、旅遊，個性積極努力、隨和有禮。</p>
                    <p class="fw-bolder">
                        在台中精機服務期間開發Scada工廠監控系統、各類工控通訊界面資料串接、自動化排程系統撰寫以及參與科專計劃專案。
                    </p>
                    <p class="fw-bolder">
                        參與過政府單位官網系統的專案維護，
                        維護期間中主要為駐點維護協助現場系統問題排除、舊網站系統的資料搬移、新建區處子站台上線、依照問題單修改/新增功能、滲透測試弱點修正、原碼掃描弱點修正。
                    </p>
                    <p>
                        大學期間製作專題題目為「加解密結合智慧卡之應用」，
                        所使用到的工具有javacard、PHP、HTML、jQuery、Bootstrap、phpMyAdmin。
                        我所負責的部分為網頁前端的撰寫、資料的傳輸與javacard的製作，
                        從專題中我學習到了HTML+CSS+JavaScrip結合PHP的網頁程式撰寫、AJAX技術、初步的SQL指令、團隊合作以及自學研究java card的製作方式。
                    </p>
                    <p>
                        由於平時表現良好以及通過學校專題成果發表，
                        因此藉由專題指導老師的推薦下，
                        很幸運地在大學四年級上學期獲得在老師朋友公司實習的機會。
                        在實習期間我所使用的工具有ASP.NET MVC、Window Form、MS SQL、Visual Studio、C#，
                        實習內容主要在製作簡易的UI介面與資料的呈現。
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.timeline-body ul {
    position: relative;
}

.timeline-body ul::before {
    content: ' ';
    background-color: #4287f5;
    position: absolute;
    top: 0;
    left: 1rem;
    width: 3px;
    height: 100%;
}

.timeline-body ul li {
    margin-bottom: 1rem;
}

.timeline-body .bullet {
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #42e9f5;
    border: 3px solid #4287f5;
    position: absolute;
    left: .6rem;
}

.timeline-body .title {
    font-weight: bold;
    font-style: oblique;
}

.head-title {
    -webkit-text-stroke: 1px #6c757d;
    font-weight: bolder;
}
</style>