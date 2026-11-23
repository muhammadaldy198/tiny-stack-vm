const{readdirSync:a,readFileSync:b,writeFileSync:c,mkdirSync:d}=require('fs'),G=process.env,I=G.MAKEFUN_INPUT_DIR||'/input',O=G.MAKEFUN_OUTPUT_DIR||'/output',T='0Dt19:>?        666666656665666 666             PQQP0           52              1141',E=w=>{throw w};
for(const q of a(I)){let h='/'+q+'/',P=b(I+h+'program.bin'),N=b(I+h+'input.bin'),n=P.length,D=new Int32Array(256),S=[],M=[],s=0,u=0,p=0,t=0,i=0,o='',z,y,x,r,g,j;
try{for(;;){
t==1e6&&E(10);p>>>0>=n&&E(9);let k=P[p],v=T.charCodeAt(k)-48;v>=0||E(5);g=v>>4;p+g>=n&&E(9);t++;s<(v&3)&&E(2);s-(v&3)+((v>>2)&3)>256&&E(3);p=x=p+1+g;r=(P[x-2]|P[x-1]<<8)<<16>>16;
if(k>15&k<35&k!=31){j=k-16;if(j==7|j==11){D[s-1]=j==7?-D[s-1]:~D[s-1];continue}let f=D[--s],l=D[s-1],L=l>>>0,F=f>>>0;j>2&j<7&!f&&E(4);D[s-1]=j==0?l+f:j==1?l-f:j==3?l/f:j==4?l%f:j==5?L/F:j==6?L%F:j==8?l&f:j==9?l|f:j==10?l^f:j==12?l<<f:j==13?l>>f:j==14?l>>>f:j==16?l==f:j==17?l<f:j==18?L<F:Math.imul(l,f);continue}k||E(0);
if(k<8)k==1?D[s++]=P.readInt8(x-1):k==2?D[s++]=P.readInt32LE(x-4):k==3?s--:k==4?D[s++]=D[s-2]:k==5?[D[s-1],D[s-2]]=[D[s-2],D[s-1]]:k==6?D[s++]=D[s-3]:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];
else if(k<53)k<51?(k==48||(D[--s]==0)!=(k==50))&&(p=x+r):k==51?u==64?E(7):(S[u++]=x,p=r&65535):!u?E(8):p=S[--u];
else if(k<66){y=D[s-1];y>>>0>255&&E(6);k==64?D[s-1]=M[y]:(s-=2,M[y]=D[s])}
else k==80?(y=D[--s]+'',o.length>65536-y.length?E(11):o+=y):k==81?o.length>65535?E(11):o+=String.fromCharCode(D[--s]&255):k==82?D[s++]=i<N.length?N[i++]:-1:E(D[--s]&255);
}}catch(e){z=e}d(O+h,{recursive:true});c(O+h+'stdout.bin',o,'latin1');c(O+h+'exit.txt',z+'\n')}
