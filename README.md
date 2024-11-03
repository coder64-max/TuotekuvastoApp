# TuotekuvastoApp

## Yhteenveto
TuotekuvastoApp on ASP.NET Core -sovellus, joka näyttää tuotteita JSON-tiedostosta. 

## Keskeiset osat
- **HomeController**: Vastaa näkymien renderöinnistä ja tuotteiden tietojen hakemisesta.
- **products.json**: JSON-muotoinen tiedosto, joka sisältää tuotetiedot.
- **Product.cshtml**: Razor-näkymä, joka esittää tuotteet HTML-muodossa.

## Kommunikointi
- HomeController lukee products.json -tiedostosta tiedot ja välittää ne Product-mallille.
- Product.cshtml käyttää näitä tietoja ja esittää ne käyttäjälle.