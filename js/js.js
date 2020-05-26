var findId=function(id){
	return document.getElementById(id);
};
var findTag=function(tag){
	return document.getElementsByTagName(tag);
};
var findClassName=function(cls){
	var ClassName="."+cls;
	return document.querySelector(ClassName);
};
var findAllClassName=function(cls){
	var ClassName="."+cls;
	return document.querySelectorAll(ClassName);
};
var hide=function(cls){
	findClassName(cls).style.opacity=0;
};
var show=function(cls){
	findClassName(cls).style.opacity=1;
};
var addClassName=function(obj,cls){
	var basename=obj.getAttribute("class");
	obj.setAttribute("class",basename+" "+cls);
};
var deleteClassName=function(obj,cls){
	var basename=obj.getAttribute("class");
	if(basename.indexOf(cls)!=-1){
		obj.setAttribute("class",basename.split(cls).join(" ").replace(/\s+/g,' '));
	}
};
/*问题 老师为什莫我给body绑定点击事件之后再点击菜单显示就不好使了呢
findTag("body")[0].addEventListener("click",navSelectedOnclick,false);*/
/*搜索栏变量*/
var nav_selected=findId("nav-selected"),
isLook=false,
nav_selected_list=findId("nav-selected-list"),
list=findAllClassName("list");
/*医院介绍区域*/
var system_int_two=findClassName("system_int_two"),
system_int_one=findClassName("system_int_one"),
system_int_three=findClassName("system_int_three"),
system_int_four=findClassName("system_int_four"),
system_int_five=findClassName("system_int_five"),
system_int=findClassName("system_int"),
system_list=findAllClassName("system_list"),
system=findClassName("system"),
one_left=findClassName("one_left"),
system_de=findClassName("system_de"),
system_de_span=system_de.getElementsByTagName("span")[0],
system_main=findClassName("system_main"),
system_int_one_left=findClassName("system_int_one_left"),
system_int_one_left_de_a=findClassName("system_int_one_left_de_a"),
button_left=findClassName("button_left"),
button_right=findClassName("button_right"),
table=findClassName("middle_table"),
tableLong=0;
hide("nav-selected-list");
clearAllNode();
system_int.appendChild(system_int_one);
system_main.removeChild(system_de);
system_int_one.removeChild(system_int_one_left_de_a);
//*菜单的显示与隐藏
function navSelectedOnclick(){
	if(isLook==false){
		show("nav-selected-list");
		isLook=true;
	}
	else{
		hide("nav-selected-list");
		isLook=false;
	}
}
/*设定点击事件*/
function setText(obj,str){
	obj.innerHTML=str;
}
/*菜单点击事件*/
function addListEvent(obj){
	for(var i=0;i<obj.length;i++){
		obj[i].onclick=function(){
			setText(nav_selected,this.innerHTML);
			navSelectedOnclick();
		}
	}
}
/*初始化节点*/
function clearAllNode(){
	var len=system_int.childElementCount;
	for(var i=0;i<len;i++){
		system_int.removeChild(system_int.children[0]);
	}
}
/*清除system子节点*/
function clearSystemNode(obj){
	system_int.removeChild(obj);
}
/*清除Class类*/
function clearClassName(){
	for(var i=0;i<system_list.length;i++){
		deleteClassName(system_list[i],"system_list_active");
	}
}
/*加入system节点*/
function addNode(index){
	if(index===0){
		return system_int_one;
	}else if(index===1){
		return system_int_two;
	}else if(index===2){
		return system_int_three;
	}else if(index===3){
		return system_int_four;
	}else if(index===4){
		return system_int_five;
	}
}
/*医院排班室*/
function addSystemEvent(obj){
	for(var i=0;i<obj.length;i++){
		setSystemEvent(obj[i],i);
	}
}
function setSystemEvent(obj,int){
	obj.onclick=function(){
		clearSystemNode(system_int.children[0]);
		system_int.appendChild(addNode(int));
		clearClassName();
		addClassName(obj,"system_list_active");
	}
}
one_left.onclick=function(){
	system_main.removeChild(system);
	system_main.appendChild(system_de);
	system_int_one.removeChild(system_int_one_left);
	system_int_one.appendChild(system_int_one_left_de_a);
}
system_de_span.onclick=function(){
	system_main.removeChild(system_de);
	system_main.appendChild(system);
	system_int_one.removeChild(system_int_one_left_de_a);
	system_int_one.appendChild(system_int_one_left);
}
button_left.onclick=function(){
	if(tableLong>=-798){
		tableLong-=798;
	    table.style.left=(tableLong)+"px";
	}
}
button_right.onclick=function(){
	if(tableLong<0){
		tableLong+=798;
	    table.style.left=(tableLong)+"px";
	}
}
addListEvent(list);
addSystemEvent(system_list);
nav_selected.addEventListener("click",navSelectedOnclick,false);