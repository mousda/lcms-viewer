var dropdownI = 1;

var topBannerParams = {
    leftWords: 'LCMS',
    centerWords: 'DATA',
    rightWords:'Explorer'
};
var  studyAreaDropdownLabel = `<h5 class = 'teal p-0 caret nav-link dropdown-toggle ' id = 'studyAreaDropdownLabel'>Bridger-Teton National Forest</h5> `

// const markup = `
// <div class="beer">
//     <h2>${beer.name}</h2>
//     <p class="brewery">${beer.brewery}</p>
// </div>
// `;
//////////////////////////////////////////////////////////////////////////////////////////////
var staticTemplates = {
	topBanner:`<h1 id = 'title-banner' data-toggle="tooltip" title="Hooray!" 
					class = 'gray pl-4 pb-0 m-0 text-center' style="font-weight:100;font-family: 'Roboto';">
					${topBannerParams.leftWords}
					<span class = 'gray' style="font-weight:1000;font-family: 'Roboto Black', sans-serif;"> ${topBannerParams.centerWords} </span>
					${topBannerParams.rightWords} </h1>`
}
//////////////////////////////////////////////////////////////////////////////////////////////
function getDropdown(id,label){return `// <div class="dropdown text-center">
					  <button class="btn btn-secondary dropdown-toggle" type="button" id="${id}-label" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    ${label}
					  </button>
					  <div id = "${id}" class="dropdown-menu" aria-labelledby="${id}-label"></div>
					</div>`}


function addDropdownItem(id,label,onclick){
	$('#' + id).append(`<button onclick = ${onclick} class="dropdown-item" type="button">${label}</button>`)
}


//////////////////////////////////////////////////////////////////////////////////////////////
function addCollapse(containerID,collapseLabelID,collapseID,collapseLabel, collapseLabelIcon,show){
	if(show === true || show === 'true' || show === 'show'){show = 'show' }else{show = ''}
	var collapseTitleDiv = `<div   class="panel-heading px-4 py-2 " role="tab" id="${collapseLabelID}">
	<h5 class="panel-title"> <a class = 'layer-collapse-title collapsed' data-toggle="collapse"  href="#${collapseID}" aria-expanded="false" aria-controls="parameters-collapse-div">
	<i class="fa ${collapseLabelIcon} mr-1" aria-hidden="true"></i> ${collapseLabel} </a></h5></div>`;

	var collapseDiv =`<div id="${collapseID}" class="panel-collapse collapse panel-body ${show} px-4 " role="tabpanel" aria-labelledby="${collapseLabelID}"></div>`;
	$('#'+containerID).append(collapseTitleDiv);
	$('#'+containerID).append(collapseDiv);
}

const setRadioValue =function(variable,value){
	console.log(value)
	window[variable] = value;
	};
function getRadio(id,label,name1,name2,variable,value1,value2){
	
	
	return `<div class = 'container'><div id = '${id}-row' class = 'row'>
		<label class="col-sm-4">${label}</label>
		<div class = 'col-sm-8'>
		<div  id = '${id}' class="toggle_radio">

	  	
	    <input type="radio" checked class="toggle_option first_toggle" id="first_toggle${id}" name="toggle_option" onclick="setRadioValue('${variable}','${value1}')"  >
	    <input type="radio"  class="toggle_option second_toggle" id="second_toggle${id}" name="toggle_option" onclick="setRadioValue('${variable}','${value2}')"  >
	    
	    <label for="first_toggle${id}"><p>${name1}</p></label>
	    <label for="second_toggle${id}"><p>${name2}</p></label>
	    
	    <div class="toggle_option_slider">
	    </div>
	    </div>
 
	</div>
	</div>
	</div>`
	}

function getDiv(containerID,divID,label,variable,value){
	eval(`var ${variable} = ${value}`)
	console.log('hello');
	console.log(eval(variable));
	var div = `<div id = "${divID}">${label}</div>`;
	$('#'+containerID).append(div);
	$('#'+ divID).click(function(){eval(`${variable}++`);console.log(eval(variable));$('#'+divID).append(eval(variable));})

}

function getToggle(containerID,toggleID,onLabel,offLabel,onValue,offValue,variable,checked){
	if(checked === undefined || checked === null || checked === 'true' || checked === 'checked'){
		checked = true;
	}
	else if(checked === 'false' || checked === ''){
		checked = false;
	}

	// var value;
	var valueDict = {true:onValue,false:offValue};
	// if(!checked){checked = true};
	// if(checked === 'on'|| checked === 'true'|| checked === true){checked = 'checked';value = onValue}
	// if(checked === 'off'|| checked === 'false' || checked === false){checked = '';value = offValue}

	eval(`window.${variable} = valueDict[checked]`)
	var toggle = `<input id = "${toggleID}" class = 'p-0 m-0' type="checkbox"  data-toggle="toggle" data-on="${onLabel}" data-off="${offLabel}" data-onstyle="toggle-on" data-offstyle="toggle-off"><br>`;
	$('#'+containerID).append(toggle);
	if(checked){
		$('#'+toggleID).bootstrapToggle('on')
	}
	$('#'+containerID).click(function(){
		var value = $('#'+toggleID).prop('checked');
		console.log(value);
		eval(`window.${variable} = valueDict[${value}]`)
	// 	value = valueDict[value];
	// 	console.log(valueDict);console.log(value)
		// eval(`window.${variable} = ${value}`)
	})
}


