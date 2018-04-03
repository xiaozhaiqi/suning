{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector(".banner");
	let banner_lbtn=document.querySelector(".banner_lbtn");
	let banner_rbtn=document.querySelector(".banner_rbtn");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,5000);
	function move(){
		n++;
		// console.log(1)
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		pagers[n].classList.add("active");
		imgs[n].classList.add("active");
	};
	banner.onmouseenter=function(){
		clearInterval(t);//清除setInterval
	};
	banner.onmouseleave=function(){
		t=setInterval(move,5000);
	};
	banner_rbtn.onclick=function(){
		move();
	}
	banner_lbtn.onclick=function(){
		n-=2;
		move();
	}
}
{
	let topbar=document.querySelector(".topbar");
	let leftbar=document.querySelector(".leftbar")
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>1250){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>2550){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
		if(st>14567){
			leftbar.style.display="none";
		}
	}
	let totop=document.querySelector(".return");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		if(st<1450){
			leftbar.style.display="none";
		}
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				leftbar.style.display="none";
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},50)
	}
}
{
	let tips=document.querySelectorAll(".leftbar_list li");
	let containers=document.querySelectorAll(".phonepc");
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=containers[index].offsetTop-50;
				// document.documentElement.scrollTop=ot;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						clearInterval(t);
					}
					document.documentElement.scrollTop=now;
				},25)
			}
		})
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<containers.length;i++){
				if(st>=containers[i].offsetTop-50){
					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("firston");
					}
					tips[i].classList.add("firston");
				}
				
			}
		});

}
{
	let top=document.querySelector(".returntop");
	top.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},50)
	}
}
{
	let right=document.querySelectorAll(".rightbar_tabs_top3");
	let left=document.querySelectorAll(".rightbar_tanchu");
	right.forEach(function(ele,index){
		ele.onmouseenter=function(){
			left[index].style.width="47px";
			left[index].style.background="#FFAA01";
			left[index].style.color="#383838";
		}
		ele.onmouseleave=function(){
			left[index].style.width=0;
			left[index].style.background="#383838";
			left[index].style.color="#FFAA01";
		}
		})
	let right1=document.querySelectorAll(".rightbar_tabs_top4");
	let left1=document.querySelectorAll(".rightbar_tanchu1");
	right1.forEach(function(ele,index){
		ele.onmouseenter=function(){
			left1[index].style.width="73px";
			left1[index].style.background="#FFAA01";
			left1[index].style.color="#383838";
		}
		ele.onmouseleave=function(){
			left1[index].style.width=0;
			left1[index].style.background="#383838";
			left1[index].style.color="#FFAA01";
		}
		})
	let right2=document.querySelector(".rightbar_tabs_top5");
	let left2=document.querySelector(".rightbar_tanchu2");
		right2.onmouseenter=function(){
			left2.style.width="160px";
		}
		right2.onmouseleave=function(){
			left2.style.width=0;
		}
}
{
	let prev=document.querySelector(".juhui_lbtn");
	let next=document.querySelector(".juhui_rbtn");
	let juhui_li=document.querySelector(".juhui_li");
	// console.log(juhui_left_adv.length);
	let n=1;
	let flag=true;
	next.onclick=function(){
	if(flag){
		flag=false;
		n++;
		juhui_li.style.transition="all 1s";
		juhui_li.style.marginLeft=-1000*n+"px";
	}}
	juhui_li.addEventListener("transitionend",function(){
		// console.log(n)
		flag=true;
		if(n===4){
			juhui_li.style.transition="none";
			juhui_li.style.marginLeft=-1000+"px";
			n=1;
		}
	})
	prev.onclick=function(){
		if(flag){
		flag=false;
		n--;
		juhui_li.style.transition="all 1s";
		juhui_li.style.marginLeft=-1000*n+"px";
	}}
	juhui_li.addEventListener("transitionend",function(){
		// console.log(n)	
		if(n===0){
			juhui_li.style.transition="none";
			juhui_li.style.marginLeft=-3000+"px";
			n=3;
		}
	})
	
}
{
	let prev=document.querySelector(".guanggao3_lbtn");
	let next=document.querySelector(".guanggao3_rbtn");
	let guanggao3_li=document.querySelector(".guanggao3_li");
	let pagers=document.querySelectorAll(".guanggao3_dian");
	let obj;
	let n=1;
	let flag=true;
	pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj=pagers[n];
				obj.classList.remove("active");
				this.classList.add("active");
				obj=this;
				guanggao3_li.style.marginLeft=-390*index+"px";
				n=index;
			}
		})
	next.onclick=function(){
		if(flag){
		flag=false;
		n++;
		guanggao3_li.style.transition="all 1s";
		guanggao3_li.style.marginLeft=-390*n+"px";
			for(let i=0;i<3;i++){
				pagers[i].classList.remove("active");
				if(n===4){
					pagers[0].classList.add("active");
				}else{
					pagers[n-1].classList.add("active");
		}}
	}}
	guanggao3_li.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			guanggao3_li.style.transition="none";
			guanggao3_li.style.marginLeft=-390+"px";
			n=1;
		}
	})
	prev.onclick=function(){
		if(flag){
		flag=false;			
		n--;
		guanggao3_li.style.transition="all 1s";
		guanggao3_li.style.marginLeft=-390*n+"px";		
			for(let i=0;i<3;i++){
				pagers[i].classList.remove("active");
			if(n===0){
				pagers[2].classList.add("active");
			}else{
				pagers[n-1].classList.add("active");
		}}
		}};
		guanggao3_li.addEventListener("transitionend",function(){
		flag=true;
		if(n===0){
			guanggao3_li.style.transition="none";
			guanggao3_li.style.marginLeft=-1170+"px";
			n=3;
		}
	})
		
}
{
	const prev=document.querySelector(".shipin_lbtn");
	const next=document.querySelector(".shipin_rbtn");
	const shipin_li=document.querySelector(".shipin_li");
	let n=1;
	next.onclick=function(){
		n++;
		shipin_li.style.transition="all 1s";
		shipin_li.style.marginLeft=-400*n+"px";
		shipin_li.addEventListener("transitionend",function(){
		if(n===3){
			shipin_li.style.transition="none";
			shipin_li.style.marginLeft=-400+"px";
			n=1;
		}
		})
	}
	prev.onclick=function(){
		n--;
		shipin_li.style.transition="all 1s";
		shipin_li.style.marginLeft=-400*n+"px";
		shipin_li.style.marginLeft=-400*n+"px";
		shipin_li.addEventListener("transitionend",function(){
		if(n===0){
			shipin_li.style.transition="none";
			shipin_li.style.marginLeft=-800+"px";
			n=2;
		}
		})
	}
}
{
	const prev=document.querySelector(".lepinggou_lbtn");
	const next=document.querySelector(".lepinggou_rbtn");
	const lepingou_list=document.querySelector(".lepingou_list");
	let n=0;
	next.onclick=function(){
		n++;
		if(n===3){
			return 1;
		}
		lepingou_list.style.marginLeft=-590*n+"px";
	}
	prev.onclick=function(){
		n--;
		if(n===1){
			return 2;
		}
		lepingou_list.style.marginLeft=-590*n+"px";
	}
}
{
	let labels=document.querySelectorAll(".banner_list");
	let menus=document.querySelectorAll(".bannerbar");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menus[index].style.display="block";
			menus[index].style.border="1px solid #333";
			menus[index].style.borderLeft="0";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
{
    let title=document.querySelectorAll(".head_left_title")
	let headbar=document.querySelectorAll(".headbar")
    let obj=headbar[0];
    title.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            headbar[index].style.display="block";
            obj=headbar[index];
        }
        ele.onmouseleave=function(){
            headbar[index].style.display="none";
        }
    })
}