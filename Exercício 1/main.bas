dim peso as integer
dim qnt_agua as integer
dim meta as integer
print "Digite seu peso (KG):"
input peso
print "Digite quanto de agua voce tomou (ML):"
input qnt_agua
meta = peso * 35
if qnt_agua >= meta then
    print "Meta atingida!"
else
    print "Meta nao atingida"
end if
sleep