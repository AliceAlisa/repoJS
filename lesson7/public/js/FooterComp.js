Vue.component('FooterComp', {
    template: `
    <footer>
            <div class="subscribe">
                <div class="subscribe__box container">
                    <div class="subscribe__left">
                        <img src="img/womenfooter.png" alt="photo" class="img-footer">
                        <p class="feedback">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,<span
                                class="italic"> a
                                pulvinar purus condimentum“</span></p>
                    </div>
                    <div class="subscribe__right">
                        <h5 class="subscribe__title">SUBSCRIBE</h5>
                        <p class="subscribe__paragraph">FOR OUR NEWLETTER AND PROMOTION</p>
                        <form action="#" class="subscribe__form">
                            <input type="email" placeholder="Enter Your Email" class="subscribe__input" required>
                            <button type="submit" class="submit__button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="all-rights">
                <div class="container footer__wrap">
                    <p class="paragraph__all__rights">
                        &copy;2021 Brand All Rights Reserved.
                    </p>
                    <div class="list__social__network">
                        <div class="social__network"><a href="#" class="link__social__network"><i
                                    class="fab fa-facebook-f"></i></a></div>
                        <div class="social__network"><a href="#" class="link__social__network"><i
                                    class="fab fa-instagram"></i></a></div>
                        <div class="social__network"><a href="#" class="link__social__network"><i
                                    class="fab fa-pinterest-p"></i></a></div>
                        <div class="social__network"><a href="#" class="link__social__network"><i
                                    class="fab fa-twitter"></i></a></div>
                    </div>
                </div>
            </div>
        </footer>
    `
});