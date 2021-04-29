/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/*
 * This function will be invoked when any of this prefab's property is changed
 * @key: property name
 * @newVal: new value of the property
 * @oldVal: old value of the property
 */
Prefab.onPropertyChange = function(key, newVal, oldVal) {

    switch (key) {
        case "dataset":
            // do something with newVal for property 'prop1'
            $('.imageContainer').html('');
            Prefab.init();
            break;
    }

};

Prefab.init = function() {

    const dataset = [{
            'thumbnailUrl': "https://farm1.staticflickr.com/4160/34418397675_18de1f7b9f_z.jpg",
            'mainUrl': "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        },
        {
            'thumbnailUrl': "https://farm5.staticflickr.com/4267/34162425794_1430f38362_z.jpg",
            'mainUrl': "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg"
        },
        {
            'thumbnailUrl': "https://mediaindia.eu/wp-content/uploads/2018/06/02-683x1024.jpg",
            'mainUrl': "https://mediaindia.eu/wp-content/uploads/2018/06/02-683x1024.jpg"
        },
    ];
    const imagesData = Prefab.dataset || dataset;

    const thumbnailclass = Prefab.thumbnailclass || 'allImages';

    var allTags = `<div class="${thumbnailclass}">`;
    $.each(imagesData, function(i) {

        var imageTag = `<img data-magnify="gallery" data-src="${imagesData[i].mainUrl}" src="${imagesData[i].thumbnailUrl}">`;

        allTags += imageTag;
    });

    $('.imageContainer').append(allTags + '</div>');

    var footerToolbar = Prefab.toolbaroptions || [
        'zoomIn',
        'zoomOut',
        'prev',
        'fullscreen',
        'next',
        'actualSize',
        'rotateRight'
    ];
    var filteredToolBar = footerToolbar.filter(Boolean);

    $('[data-magnify]').magnify({
        headerToolbar: [
            'close',
        ],
        footerToolbar: filteredToolBar,
        title: false,
        callbacks: {
            opened: function(context) {
                // Will fire after modal is opened
                var element = document.querySelector('.magnify-stage img')
                // And pass it to panzoom
                panzoom(element)
            },
        },
    });

};

Prefab.onReady = function() {
    // this method will be triggered post initialization of the prefab.
    Prefab.init();
};