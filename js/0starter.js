var bodyScripts = ['1variables.js','2templates.js','3template-adder.js','4map-manager.js','5chart-manager.js','6parameters-manager.js','7tools-toggle-manager.js','8gee-lib-manager.js','9gee-run-manager.js','10download_dict.js','11download-manager.js','12export-manager.js','13plot-manager.js','14tutorial-manager.js'];
var scriptsFolder = './js/';
var headContent = [`<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155737118-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-155737118-1');
        </script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="./images/usfslogo.png">
        
        <script async src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCEfhh_56VLoQEYIczNxJlrsPRWNYQ5NJE&libraries=places"></script>
        <script type="text/javascript" src="js/ee_api_js.js"></script>
        <!-- <script src="https://d3js.org/d3.v5.min.js"></script> -->
      
        <script type="text/javascript" src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js'></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css">
        
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        
        <script src="https://hammerjs.github.io/dist/hammer.js"></script>


        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
       
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
        <script src = './js/jquery.fittext.js'></script>
        <!-- https://gitbrent.github.io/bootstrap4-toggle/ -->
        <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src = './js/jscolor.js'></script>
        <script src='https://cdn.plot.ly/plotly-latest.min.js'></script>
        <link rel="stylesheet" href="./css/style.css">`
]



        


      
  
//         <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        
//         


//         <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
       
//         <!-- Latest compiled and minified JavaScript -->
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
//         <script src = './js/jquery.fittext.js'></script>
//         <!-- https://gitbrent.github.io/bootstrap4-toggle/ -->
//         <!-- <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
//         <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script> -->
//         <script src = './js/jscolor.js'></script>
//         <script src='https://cdn.plot.ly/plotly-latest.min.js'></script>
//         <link rel="stylesheet" href="./css/style.css">

// headContent.map(function(content){
    // $('head').append(content);
// })

$('head').append(`<script type="text/javascript" src="./js/gena-gee-palettes.js"></script>`);
bodyScripts.map(function(script){
    $('body').append(`<script type="text/javascript" src="${scriptsFolder}${script}"></script>`);
})
      
        
        
