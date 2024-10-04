
$(function(){
    // $("body").delay(500).fadeIn()
    $("a").click(function(e){
        
        var attr = $(this).attr("href");
        if(attr == "#" || attr == ""){
            e.preventDefault()
        }
    })

    // 인트로가기 클릭시
    $(".logo a").click(function(){
        setTimeout(function(){
            location.href = "full.html"
        }, 500)
    })

    // 메인슬라이드
    $(".img_slide").slick({
        autoplay: true,
        fade: true,
        arrows: false,
        dots: false,
    })

    // 개인프로젝트 카드 호버시
    $(".pro_design_img img").hover(function(){
        $(this).css({"transform":"scale(1.1)"});
        $(".pro_design_img h4").hide();
        $(this).next().show();
        $(".project_design>h4").css({"opacity":"0"});
    }, function(){
        $(this).css({"transform":"scale(1)"})
        // $(".pro_design_img h4").hide();
        // $(".project_design>h4").css({"opacity":"1"});
    })

    // 개인프로젝트 팝업 클릭시
    $(".pro_design_more").click(function(){
        $(".project_popup").slideDown();
    })

    $(".project_popup_close").click(function(){
        $(".project_popup").slideUp();
    })

    // 포토일러스트 슬라이드
    $(".photo_illust").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        autoplaySpeed: 1,
        speed: 8000,
        cssEase: "linear",
    })

    // 팀슬라이드
    $(".team_slide").slick({
        autoplay: true,
        fade: true,
        arrows: true,
        dots: true,
    })

    // 팀프로젝트 화투 호버시
    $(".deck").hover(function(){
        $(".deck h3").css({"top":"40%","opacity":"1"})
        $(".deck img").css({"opacity":"0.5"})
        $(".card img").css({"opacity":"1"})
        $(".team_right h4").css({"opacity":"0"})
    }, function(){
        $(".deck h3").css({"top":"60%","opacity":"0"})
        $(".deck img").css({"opacity":"1"})
        $(".card img").css({"opacity":"0"})
        $(".team_right h4").css({"opacity":"1"})
    })

    // 팀프로젝트 팝업 클릭시
    $(".deck").click(function(){
        $(".team_pop").slideDown();
    })

    $(".team_close").click(function(){
        $(".team_pop").slideUp();
    })

    // 웹페이지 호버시 효과
    $(".web_page_menu ul li").hover(function(){
        $(this).find("img").css({"opacity":"0.3"})
        $(this).find("h3").stop().fadeIn(500)
        $(this).find("h3").css({"animation":"font_effect 1s 1s infinite alternate","opacity":"1"})
        $(this).find(".hover_line").css({"animation":"line_move1 0.6s ease-out forwards"})
        $(this).find(".hover_line1").css({"animation":"hover_line_move1 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line2").css({"animation":"hover_line_move2 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line3").css({"animation":"hover_line_move3 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line4").css({"animation":"hover_line_move4 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line_top").css({"animation":"line_tb_move 1s ease-out forwards"})
        $(this).find(".hover_line_bottom").css({"animation":"line_tb_move 1s ease-out forwards"})
    }, function(){
        $(this).find("img").css({"opacity":"1"})
        $(this).find("h3").stop().fadeOut()
        $(this).find("h3").css({"animation":"none", "opacity":"0"})
        $(this).find(".hover_line").css({"animation":"none"})
        $(this).find(".hover_line1").css({"animation":"none"})
        $(this).find(".hover_line2").css({"animation":"none"})
        $(this).find(".hover_line3").css({"animation":"none"})
        $(this).find(".hover_line4").css({"animation":"none"})
        $(this).find(".hover_line_top").css({"animation":"none"})
        $(this).find(".hover_line_bottom").css({"animation":"none"})
    })

    // 다올팝업 클릭시
    $(".web_page_menu ul li").eq(0).click(function(){
        $(".daol_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".daol_block1").css({"animation":"daol_block1 0.4s 1s ease forwards"})
        $(".daol_block2").css({"animation":"daol_block2 0.3s 1.2s ease forwards"})
        $(".daol_block3").css({"animation":"daol_block3 0.5s 1.4s ease-out forwards"})
        $(".daol_pop h2").css({"animation":"daol_h 0.3s 0.6s linear forwards"})
        $(".daol_pop h3").css({"animation":"daol_h 0.3s 0.7s linear forwards"})
        $(".daol_pop_icon img:nth-child(1)").css({"animation":"coding_icon 0.5s 1.8s ease-out forwards"})
        $(".daol_pop_icon img:nth-child(2)").css({"animation":"coding_icon 0.5s 1.9s ease-out forwards"})
        $(".daol_pop p").css({"animation":"baro 0.3s 2.3s linear forwards"})
        $(".daol_notebook").css({"animation":"daol_note_page 0.3s 2.5s linear forwards"})
        $(".daol_page1").css({"animation":"daol_note_page 0.3s 2.7s linear forwards"})
        $(".daol_page2").css({"animation":"daol_note_page 0.3s 2.9s linear forwards"})
    })

    $(".coding_pop_close").click(function(){
        $(".daol_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".daol_pop *").css({"animation":"none"})
    })
    
    // 하나팝업 클릭시
    $(".web_page_menu ul li").eq(1).click(function(){
        $(".hana_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".hana_block1").css({"animation":"hana_blmove1 0.5s 0.6s ease forwards"})
        $(".hana_block2").css({"animation":"hana_blmove2 0.5s 0.8s ease forwards"})
        $(".hana_pop h2").css({"animation":"daol_note_page 0.5s 1.2s linear forwards"})
        $(".hana_pop h3").css({"animation":"daol_note_page 0.5s 1.4s linear forwards"})
        $(".hana_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.6s ease-out forwards"})
        $(".hana_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.7s ease-out forwards"})
        $(".hana_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 1.8s ease-out forwards"})
        $(".hana_pop p").css({"animation":"baro 0.3s 2.2s ease-out forwards"})
        $(".hana_notebook").css({"animation":"hana_notebook 0.5s 2.6s ease-in-out forwards"})
        $(".hana_page").css({"animation":"hana_page 0.5s 3s ease-in-out forwards"})
    })

    $(".hana_close").click(function(){
        $(".hana_pop").css({"top":"-50%"})
        $(".coding_pop_br").delay().fadeOut()
        $(".hana_pop *").css({"animation":"none"})
    })

    // 맥도날드 팝업 클릭시
    $(".web_page_menu ul li").eq(2).click(function(){
        $(".mc_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".mc_block").css({"animation":"mc_blmove 0.5s 0.8s ease forwards"})
        $(".mc_block h2").css({"animation":"daol_note_page 0.3s 1.3s ease forwards"})
        $(".mc_block h3").css({"animation":"daol_note_page 0.3s 1.5s ease forwards"})
        $(".mc_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".mc_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.9s ease forwards"})
        $(".mc_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".mc_block p").css({"animation":"daol_note_page 0.3s 2.4s ease forwards"})
        $(".mc_notebook").css({"animation":"mc_notebook 0.5s 2.6s ease forwards"})
        $(".drink").css({"animation":"drink 0.5s 2.6s ease forwards"})
        $(".mc_page").css({"animation":"mc_page 0.5s 2.8s ease forwards"})
        $(".hamburger-cont1").css({"animation":"ham_cont7 0.6s 3.6s ease-in forwards"})
        $(".hamburger-cont2").css({"animation":"ham_cont6 0.6s 3.7s ease-in forwards"})
        $(".hamburger-cont3").css({"animation":"ham_cont5 0.6s 3.8s ease-in forwards"})
        $(".hamburger-cont4").css({"animation":"ham_cont4 0.6s 3.9s ease-in forwards"})
        $(".hamburger-cont5").css({"animation":"ham_cont3 0.6s 4s ease-in forwards"})
        $(".hamburger-cont6").css({"animation":"ham_cont2 0.6s 4.1s ease-in forwards"})
        $(".hamburger-cont7").css({"animation":"ham_cont1 0.6s 4.2s ease-in forwards"})
        $(".hamburger1").css({"animation":"ham_move 1s 4.6s ease-out forwards"})
        $(".hamburger2").css({"animation":"ham_move 1s 4.7s ease-out forwards"})
        $(".hamburger3").css({"animation":"ham_move 1s 4.8s ease-out forwards"})
        $(".hamburger4").css({"animation":"ham_move 1s 4.9s ease-out forwards"})
        $(".hamburger5").css({"animation":"ham_move 1s 5s ease-out forwards"})
        $(".hamburger6").css({"animation":"ham_move 1s 5.1s ease-out forwards"})
        $(".hamburger7").css({"animation":"ham_move 1s 5.2s ease-out forwards"})
    })

    $(".mc_close").click(function(){
        $(".mc_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".mc_pop *").css({"animation":"none"})
    })

    // 할리스커피 팝업 클릭시
    $(".web_page_menu ul li").eq(3).click(function(){
        $(".hollys_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".hollys_block").css({"animation":"hollys_block 0.5s 0.6s ease-out forwards"})
        $(".hollys_block h2").css({"animation":"daol_note_page 0.3s 1.2s linear forwards"})
        $(".hollys_block h3").css({"animation":"daol_note_page 0.3s 1.4s linear forwards"})
        $(".hollys_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".hollys_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.9s ease forwards"})
        $(".hollys_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".hollys_icon img:nth-child(4)").css({"animation":"coding_icon 0.3s 2.1s ease forwards"})
        $(".hollys_icon img:nth-child(5)").css({"animation":"coding_icon 0.3s 2.2s ease forwards"})
        $(".hollys_block p").css({"animation":"daol_note_page 0.3s 2.6s ease forwards"})
        $(".hollys_notebook").css({"animation":"hollys_notebook 0.5s 3s ease forwards"})
        $(".table").css({"animation":"table 0.5s 3s ease forwards"})
        $(".hollys_page").css({"animation":"daol_note_page 0.5s 3.2s ease forwards"})
        $(".coffee").css({"animation":"coffee 0.5s 3.8s ease-out forwards"})
    })

    $(".hollys_close").click(function(){
        $(".hollys_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".hollys_pop *").css({"animation":"none"})
    })

    // 한강동물병원 팝업 클릭시
    $(".web_page_menu ul li").eq(4).click(function(){
        $(".animal_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".animal_block").css({"animation":"animal_block 0.5s 0.8s ease forwards"})
        $(".animal_block h2").css({"animation":"daol_note_page 0.3s 1.2s ease forwards"})
        $(".animal_block h3").css({"animation":"daol_note_page 0.3s 1.4s ease forwards"})
        $(".animal_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.6s ease forwards"})
        $(".animal_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.7s ease forwards"})
        $(".animal_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".animal_block p").css({"animation":"daol_note_page 0.3s 2.2s ease forwards"})
        $(".animal_notebook").css({"animation":"daol_note_page 0.3s 2.4s ease forwards"})
        $(".animal_page1").css({"animation":"daol_note_page 0.3s 2.8s ease forwards"})
        $(".animal_page2").css({"animation":"daol_note_page 0.3s 3s ease forwards"})
        $(".cat1").css({"animation":"coding_icon 0.3s 3.4s ease forwards"})
        $(".cat2").css({"animation":"coding_icon 0.3s 3.6s ease forwards"})
        $(".medical_box").css({"animation":"coding_icon 0.3s 3.5s ease forwards"})
        $(".dog2").css({"animation":"coding_icon 0.3s 3.7s ease forwards"})
        $(".dog1").css({"animation":"coding_icon 0.3s 3.8s ease forwards"})
    })

    $(".animal_close").click(function(){
        $(".animal_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".animal_pop *").css({"animation":"none"})
    })

    // 인디고 팝업
    $(".web_page_menu ul li").eq(5).click(function(){
        $(".indigo_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".indigo_block1").css({"animation":"indigo_block1 0.5s 0.6s ease forwards"})
        $(".indigo_block2").css({"animation":"indigo_block2 0.5s 0.8s ease forwards"})
        $(".indigo_pop h2").css({"animation":"daol_note_page 0.3s 1.2s ease forwards"})
        $(".indigo_pop h3").css({"animation":"daol_note_page 0.3s 1.4s ease forwards"})
        $(".indigo_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.6s ease forwards"})
        $(".indigo_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.7s ease forwards"})
        $(".indigo_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".indigo_icon img:nth-child(4)").css({"animation":"coding_icon 0.3s 1.9s ease forwards"})
        $(".indigo_icon img:nth-child(5)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".indigo_pop p").css({"animation":"daol_note_page 0.3s 2.6s ease forwards"})
        $(".indigo_notebook").css({"animation":"daol_note_page 0.3s 3s ease forwards, notebook_move 0.3s 4.6s ease-out forwards"})
        $(".indigo_pc_page").css({"animation":"indigo_pc 0.5s 3.2s ease-in-out forwards"})
        $(".indigo_mobile1").css({"animation":"indigo_mobile1 0.5s 3.3s ease-in-out forwards"})
        $(".indigo_mobile2").css({"animation":"indigo_mobile2 0.5s 3.4s ease-in-out forwards"})
        $(".soccer").css({"animation":"soccer_move 2s 3.4s linear forwards"})
    })

    $(".indigo_close").click(function(){
        $(".indigo_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".indigo_pop *").css({"animation":"none"})
    })

    // tkit 팝업 클릭시
    $(".web_page_menu ul li").eq(6).click(function(){
        $(".tkit_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".tkit_block").css({"animation":"tkit_block 0.5s 0.8s ease forwards"})
        $(".tkit_pop h2").css({"animation":"daol_note_page 0.3s 1.2s ease forwards"})
        $(".tkit_pop h3").css({"animation":"daol_note_page 0.3s 1.4s ease forwards"})
        $(".tkit_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".tkit_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.9s ease forwards"})
        $(".tkit_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".tkit_icon img:nth-child(4)").css({"animation":"coding_icon 0.3s 2.1s ease forwards"})
        $(".tkit_icon img:nth-child(5)").css({"animation":"coding_icon 0.3s 2.2s ease forwards"})
        $(".tkit_pop p").css({"animation":"daol_note_page 0.3s 2.4s ease forwards"})
        $(".tkit_notebook").css({"animation":"daol_note_page 0.5s 2.6s ease forwards"})
        $(".trip_hat").css({"animation":"hat 0.5s 3s ease forwards"})
        $(".bag").css({"animation":"coding_icon 0.5s 3.1s ease forwards"})
        $(".tkit_pc1_page").css({"animation":"coding_icon 0.5s 3.2s ease forwards"})
        $(".tkit_pc2_page").css({"animation":"coding_icon 0.5s 3.3s ease forwards"})
        $(".tkit_mobile1_page").css({"animation":"coding_icon 0.5s 3.4s ease forwards"})
        $(".tkit_mobile2_page").css({"animation":"coding_icon 0.5s 3.5s ease forwards"})
        $(".tkit_mobile3_page").css({"animation":"coding_icon 0.5s 3.6s ease forwards"})
    })

    $(".tkit_close").click(function(){
        $(".tkit_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".tkit_pop *").css({"animation":"none"})
    })

    // 신한은행 팝업 클릭시
    $(".web_page_menu ul li").eq(7).click(function(){
        $(".bank_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".bank_block2").css({"animation":"bank_block2 0.5s 0.8s ease forwards"})
        $(".bank_block1").css({"animation":"bank_block1 0.5s 0.9s ease forwards"})
        $(".bank_pop h2").css({"animation":"daol_note_page 0.3s 1.3s ease forwards"})
        $(".bank_pop h3").css({"animation":"daol_note_page 0.3s 1.5s ease forwards"})
        $(".bank_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.9s ease forwards"})
        $(".bank_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".bank_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2.1s ease forwards"})
        $(".bank_icon img:nth-child(4)").css({"animation":"coding_icon 0.3s 2.2s ease forwards"})
        $(".bank_icon img:nth-child(5)").css({"animation":"coding_icon 0.3s 2.3s ease forwards"})
        $(".bank_pop p").css({"animation":"daol_note_page 0.3s 2.7s ease forwards"})
        $(".bank_note").css({"animation":"bank_note 0.5s 3s ease-out forwards"})
        $(".bank_f1").css({"animation":"bank_f1 0.3s 3.4s ease forwards"})
        $(".bank_pc_page").css({"animation":"bank_page1 0.3s 3.4s ease-out forwards"})
        $(".bank_m1_page").css({"animation":"bank_page2 0.3s 3.6s ease-out forwards"})
        $(".bank_m2_page").css({"animation":"bank_page3 0.3s 3.8s ease-out forwards"})
        $(".bank_f2").css({"animation":"coding_icon 0.3s 4s ease-in-out forwards"})
        $(".bank_f3").css({"animation":"coding_icon 0.3s 4.1s ease-in-out forwards"})
        $(".bank_f4").css({"animation":"coding_icon 0.3s 4.2s ease-in-out forwards"})
    })

    $(".bank_close").click(function(){
        $(".bank_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".bank_pop *").css({"animation":"none"})
    })
})// 제이커리끝

$(window).scroll(function(){
    var h = $(window).scrollTop();
    console.log(h)

    // 개인프로젝트 스크롤
    if(h >= 800){
        $(".project_cont").css({"opacity":"1"})
    }else{
        $(".project_cont").css({"opacity":"0"})
    }

    if(h >= 1400){
        $(".sonic").css({"opacity":"1","top":"85px"})
        $(".koopa").css({"right":"36%","opacity":"1"})
    }else{
        $(".sonic").css({"opacity":"0","top":"60px"})
        $(".koopa").css({"right":"38%","opacity":"0"})
    }

    // 팀프로젝트 스크롤
    if(h >= 2400){
        $(".team_left, .team_right").css({"opacity":"1"})
    }else{
        $(".team_left, .team_right").css({"opacity":"0"})
    }

    if(h >= 2500){
        $(".team_icon1, .team_icon2").css({"transform":"scale(1)"})
    }else{
        $(".team_icon1, .team_icon2").css({"transform":"scale(0)"})
    }

    if(h >= 2600){
        $(".team_project_area>img").css({"opacity":"1"})
    }else{
        $(".team_project_area>img").css({"opacity":"0"})
    }

    // 엔딩 스크롤
    if(h >= 4100){
        $(".fin1").fadeIn()
        $(".fin2").delay(200).fadeIn()
        $(".fin3").delay(400).fadeIn()
    }
})