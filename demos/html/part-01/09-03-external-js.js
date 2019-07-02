document.querySelector( '#btn-1' ).onclick = function() {
    alert( 'You clicked the button' );
};
document.querySelector( '#input-1' ).oninput = function() {
    console.log( this.value );
};