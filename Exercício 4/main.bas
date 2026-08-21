dim distancia as integer
dim tempo as integer
print "Digite a distancia percorrida (KM):"
input distancia
print "Digite o tempo demorado (MIN):"
input tempo
dim pace as integer = tempo / distancia
print"Seu pace medio e:";pace;" MIN/KM"
sleep