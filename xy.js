
    // 获取第二个模态框和图片元素
    var modal2 = document.getElementById("myModal2");
    var img2 = document.getElementById("cj1Image");
    var modalImg2 = document.getElementById("img02");

    // 获取第3个模态框和图片元素
    var modal3 = document.getElementById("myModal3");
    var img3 = document.getElementById("cj2Image");
    var modalImg3 = document.getElementById("img03");

    // 获取第4个模态框和图片元素
    var modal4 = document.getElementById("myModal4");
    var img4 = document.getElementById("zy1Image");
    var modalImg4 = document.getElementById("img04");

    // 获取第5个模态框和图片元素
    var modal5 = document.getElementById("myModal5");
    var img5 = document.getElementById("zy2Image");
    var modalImg5 = document.getElementById("img05");

    // 打开第二个模态框
    img2.onclick = function(){
        modal2.style.display = "block";
        modalImg2.src = this.src;
    }
	
    // 打开第3个模态框
    img3.onclick = function(){
        modal3.style.display = "block";
        modalImg3.src = this.src;
    }

    // 打开第4个模态框
    img4.onclick = function(){
        modal4.style.display = "block";
        modalImg4.src = this.src;
    }
	
    // 打开第5个模态框
    img5.onclick = function(){
        modal5.style.display = "block";
        modalImg5.src = this.src;
    }

    // 关闭第二个模态框
    function closeModal2() {
        modal2.style.display = "none";
    }
	
    // 关闭第3个模态框
    function closeModal3() {
        modal3.style.display = "none";
    }

    // 关闭第4个模态框
    function closeModal4() {
        modal4.style.display = "none";
    }
	
    // 关闭第5个模态框
    function closeModal5() {
        modal5.style.display = "none";
    }