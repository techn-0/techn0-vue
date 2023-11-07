<template>
<section id="site">
    <div class="site__inner">
        <h2 class="site__title">Site coding <em>나의 작업물</em></h2>
        <div class="site__wrap">
            <article class="site__item s1">
                <span class="num">1.</span>
                <div class="text">
                    <div>Interactive</div>
                    <div>Web site with</div>
                    <div>HTML / CSS / JS</div>
                </div>
                <h3 class="title">처음 만든 인터렉티브 웹페이지</h3>
                <div class="btn">
                    <a href="https://github.com/techn-0/techn-0.github.io">code / </a>
                    <a href="https://techn-0.github.io/">view</a>
                </div>
                <div class="info">
                    <span>site coding</span>
                    <span>Study and project duration : A month+</span>
                    <span>use stack : html5/css3/JS</span>
                </div>
            </article>
            <article class="site__item s2">
                <span class="num">2.</span>
                <div class="text">
                    <div>Make</div>
                    <div>Blog with</div>
                    <div>vue</div>
                </div>
                <h3 class="title">VUE를 이용한 블로그 제작</h3>
                <div class="btn">
                    <a href="https://github.com/techn-0/techn0-vue">code / </a>
                    <a href="https://luxury-selkie-fedc4e.netlify.app/">view</a>
                </div>
                <div class="info">
                    <span>Make</span>
                    <span>Study and project duration : Two months+</span>
                    <span>use stack : HTML5/CSS3,JS, Vue</span>
                </div>
            </article>
            <article class="site__item s3">
                <span class="num">3.</span>
                <div class="text">
                    <div>Coming soon</div>
                    <div>Coming soon</div>
                    <div>Coming soon</div>
                </div>
                <h3 class="title">Coming soon</h3>
                <div class="btn">
                    <a href="Coming soon">code / </a>
                    <a href="Coming soon">view</a>
                </div>
                <div class="info">
                    <span>Coming soon</span>
                    <span>Coming soon</span>
                    <span>Coming soon</span>
                </div>
            </article>
            <article class="site__item s4">
                <span class="num">4.</span>
                <div class="text">
                    <div>Coming soon</div>
                    <div>Coming soon</div>
                    <div>Coming soon</div>
                </div>
                <h3>Coming soon</h3>
                <div class="btn">
                    <a href="Coming soon">code / </a>
                    <a href="Coming soon">view</a>
                </div>
                <div class="info">
                    <span>Coming soon</span>
                    <span>Coming soon</span>
                    <span>Coming soon</span>
                </div>
            </article>
        </div>
    </div>
</section>
</template>



<style>
.site__inner {
    padding: 16px;
}
.site__title {
    position: sticky;
    top: 70px;
    left: 0;
    width: 70%;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100);
    margin-bottom: 100px;
}
.site__title em {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2;
}
.site__item {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    left: 0;
}
.site__item.s1 {
    background-color: var(--subBg100);
    top: 180px;
}
.site__item.s2 {
    background-color: var(--subBg200);
    top: 200px;
}
.site__item.s3 {
    background-color: var(--subBg300);
    top: 220px;
}
.site__item.s4 {
    background-color: var(--subBg400);
    top: 240px;
}
.site__item .num {
    font-size: 5vw;
    line-height: 1;
    font-weight: 900;
    font-family: var(--mainNum-font);
    position: absolute;
    left: 1vw;
    top: 1vw;
}
.site__item .text {
    text-align: center;
    margin-bottom: 1rem;
}
.site__item .text > div {
    font-size: 3vw;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: underline;
    font-family: var(--mainEng-font);
}
.site__item .title {
    font-family: var(--mainKor-font);
    margin-bottom: 1rem;
}
.site__item .btn a {
    text-decoration: underline;
    text-transform: uppercase;
    color: var(--black200);
    font-size: 1rem;
    transition: all 0.3s;
}
.site__item .btn a:hover {
    color: var(--black);
}
.site__item .info {
    position: absolute;
    left: 0;
    bottom: 3%;
    width: 98%;
    margin-left: 1%;
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
    display: flex;
    justify-content: space-between;
}
.site__item .info span {
    font-family: var(--mainKor-font);
    font-size: 12px;
    padding: 3px 0;
    text-transform: uppercase;
}
@media (max-width: 800px){
    .site__title {
        width: 100%;
        margin-bottom: 10vw;
        font-size: 30px;
        height: auto;
        top: 68px;
        z-index: 1000;
        background-color: var(--mainBg-color);
    }
    .site__item.s1 {
        top: 140px;
    }
    .site__item.s2 {
        top: 160px;
    }
    .site__item.s3 {
        top: 180px;
    }
    .site__item.s4 {
        top: 200px;
    }
    .site__item .num {
        font-size: 80px;
        left: 20px;
        top: 20px;
    }
    .site__item .text > div {
        font-size: 26px;
    }
    .site__item .info {
        flex-direction: column;
        width: 90%;
        margin-left: 5%;
        padding: 5px 0;
    }
}
</style>