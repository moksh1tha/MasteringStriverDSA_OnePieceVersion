// Different One Piece character backgrounds for each topic completion milestone
export const backgroundImages = [
  {
    url: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Monkey D. Luffy",
    requiredProgress: 0
  },
  {
    url: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Roronoa Zoro",
    requiredProgress: 10
  },
  {
    url: "https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Nami",
    requiredProgress: 25
  },
  {
    url: "https://images.pexels.com/photos/1323708/pexels-photo-1323708.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Sanji",
    requiredProgress: 40
  },
  {
    url: "https://images.pexels.com/photos/1323709/pexels-photo-1323709.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Nico Robin",
    requiredProgress: 60
  },
  {
    url: "https://images.pexels.com/photos/1323710/pexels-photo-1323710.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Portgas D. Ace",
    requiredProgress: 80
  },
  {
    url: "https://images.pexels.com/photos/1323711/pexels-photo-1323711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    character: "Gol D. Roger",
    requiredProgress: 100
  }
];

export const getCurrentBackground = (progressPercentage: number) => {
  // Find the highest threshold background that's been unlocked
  const unlockedBackgrounds = backgroundImages.filter(bg => progressPercentage >= bg.requiredProgress);
  return unlockedBackgrounds[unlockedBackgrounds.length - 1] || backgroundImages[0];
};