#include <bits/stdc++.h>
using namespace std;
int main() {
    string s="";
    std::getline(std::cin, s);
    
    map<char,int>mp;


    for(int i=0;i<s.size();i++)
    {  
        char ch=s[i];  // check for empty spaces
        if(ch!=' ')
         {    
              if(ch>=97 && ch<=122)//covert lowercase to uppercase 
                   ch=ch-32;     
         
              mp[ch]++;
              
         }
    }

    for(auto it:mp)
    {
        cout<<it.first<<"  "<<it.second<<endl;
    }
}
