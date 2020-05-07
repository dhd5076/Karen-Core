//
//  HomeView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/4/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct AppView: View {
    
    @State public var showingSettings = false
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack {
                    AppLink(destination: AnyView(MusicView()), text: "Music", color: Color.blue)
                    AppLink(destination: AnyView(ContactsView()), text: "People", color: Color.purple)
                    AppLink(destination: AnyView(HomeView()), text: "Home",
                             color: Color.orange)
                    AppLink(destination: AnyView(GymView()),  text: "Health",
                             color: Color.pink)
                    AppLink(destination: AnyView(BankingView()), text: "Finance",
                             color: Color.green)
                    AppLink(destination: AnyView(BankingView()), text: "School",
                    color: Color.yellow)
                    AppLink(destination: AnyView(BankingView()), text: "Private",
                             color: Color.black)
                }
                .navigationBarTitle("Apps")
            }
        }
    }
}

struct AppLink : View {
    let destination : AnyView
    let text : String
    let color : Color
    
    var body: some View {
        NavigationLink(destination: destination) {
            Text(text)
                .frame(maxWidth: .infinity, minHeight: 150)
                .foregroundColor(.white)
                .background(color)
                .padding()
                .font(.system(size: 30, weight: .heavy, design: .default))
            
        }
    }
}

struct AppView_Previews: PreviewProvider {
    static var previews: some View {
        AppView()
    }
}
