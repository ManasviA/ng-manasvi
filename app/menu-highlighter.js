/**
 * Created by Girish Khosla on 11/2/2014.
 */
$('.sidebar-nav li a').click(function()
{
    $('a').removeClass('active');
    $(this).addClass('active');
});