$(document).ready(function() { 
  $('input.autocomplete.games').autocomplete({
    data: {
      'Super Smash Bros Melee': '/imgs/icons/melee.png',
      'Super Smash Bros Brawl': '/imgs/icons/brawl.png',
      'League of Legends': '/imgs/icons/league.png'
    }
  })
})