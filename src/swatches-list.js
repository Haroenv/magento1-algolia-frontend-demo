/* https://magento.algolia.com/skin/frontend/rwd/default/js/configurableswatches/swatches-list.js */
var ConfigurableSwatchesList={swatchesByProduct:{},init:function()
{var that=this;$j('.configurable-swatch-list li').each(function(){that.initSwatch(this);var $swatch=$j(this);if($swatch.hasClass('filter-match')){that.handleSwatchSelect($swatch);}});},initSwatch:function(swatch)
{var that=this;var $swatch=$j(swatch);var productId;$j($swatch).hover(function(){var swatchUl=$swatch.parent();swatchUl.find('.x').each(function(){$j(this).show();$j(this).closest('li').addClass('not-available');});});if(productId=$swatch.data('product-id')){if(typeof(this.swatchesByProduct[productId])=='undefined'){this.swatchesByProduct[productId]=[];}
this.swatchesByProduct[productId].push($swatch);$swatch.find('a').on('click',function(e){e.preventDefault();that.handleSwatchSelect($swatch);});}},handleSwatchSelect:function($swatch)
{var productId=$swatch.data('product-id');var label;if(label=$swatch.data('option-label')){ConfigurableMediaImages.swapListImageByOption(productId,label);}
$j.each(this.swatchesByProduct[productId],function(key,$productSwatch){$productSwatch.removeClass('selected');});$swatch.addClass('selected');}};$j(document).on('configurable-media-images-init',function(){ConfigurableSwatchesList.init();});
