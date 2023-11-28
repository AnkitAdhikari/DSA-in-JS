function power(base,expo){
  if(expo === 0) return 1;
  if(expo === 1) return base;
  return power(base,expo-1) * base;
}
