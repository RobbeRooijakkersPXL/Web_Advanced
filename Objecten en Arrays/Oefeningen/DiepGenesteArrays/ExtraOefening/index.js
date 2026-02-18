//Disclaimer, WTF IS DEZE OEFENING CHAT


const card = {
  id: 89631139,
  name: "Blue-Eyes White Dragon",
  type: "Normal Monster",
  frameType: "normal",
  desc: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  atk: 3000,
  def: 2500,
  level: 8,
  race: "Dragon",
  attribute: "LIGHT",
  archetype: "Blue-Eyes",
  card_images: [
    {
      id: 89631139,
      image_url: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
      image_url_small:
        "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      image_url_cropped:
        "https://images.ygoprodeck.com/images/cards_cropped/89631139.jpg",
    },
    {
      id: 89631140,
      image_url: "https://images.ygoprodeck.com/images/cards/89631140.jpg",
      image_url_small:
        "https://images.ygoprodeck.com/images/cards_small/89631140.jpg",
      image_url_cropped:
        "https://images.ygoprodeck.com/images/cards_cropped/89631140.jpg",
    },
    {
      id: 89631141,
      image_url: "https://images.ygoprodeck.com/images/cards/89631141.jpg",
      image_url_small:
        "https://images.ygoprodeck.com/images/cards_small/89631141.jpg",
      image_url_cropped:
        "https://images.ygoprodeck.com/images/cards_cropped/89631141.jpg",
    },
  ],
  card_prices: [
    {
      cardmarket_price: "0.40",
      tcgplayer_price: "0.58",
      ebay_price: "10.95",
      amazon_price: "3.90",
      coolstuffinc_price: "1.99",
    },
  ],
};

const gekozenNummer = parseInt(prompt("choose a number (between 1 and 3): "));

if(gekozenNummer <= 3 && gekozenNummer >= 1){
    const container = document.createElement("div");
    container.style.border = "2px solid #333"
    container.style.borderRadius = "10px";
    container.style.padding = "16px";
    container.style.width = "320px";
    container.style.backgroundColor = "#f9f9f9";

    const title = document.createElement("h3");
    title.textContent = card.name.toUpperCase();
    title.style.marginBottom = "8px";
    container.appendChild(title);

    const infoRule = document.createElement("p");
    infoRule.textContent = card.type + " -- " + "ATK " + card.atk + " / " + "DEF " + card.def;
    infoRule.style.marginBottom = "6px";
    container.appendChild(infoRule);

    const description = document.createElement("p");
    description.textContent = card.desc;
    description.style.marginBottom = "6px";
    container.appendChild(description);
    


}else{
    
}

