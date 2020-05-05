//
//  HomeView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/4/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct HomeView: View {
    
    @State public var showingSettings = false
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack {
                    HomeLink(destination: AnyView(SpotifyView()), text: "Music", color: Color.green)
                    HomeLink(destination: AnyView(ContactView()), text: "Contacts", color: Color.purple)
                    HomeLink(destination: AnyView(LightingView()), text: "Lighting",
                             color: Color.yellow)
                    HomeLink(destination: AnyView(GymView()),  text: "Gym",
                             color: Color.blue)
                    HomeLink(destination: AnyView(BankingView()), text: "Banking",
                             color: Color.gray)
                }
                .navigationBarTitle("Home")
                .navigationBarItems(trailing:
                    Button("Settings") {
                        self.showingSettings.toggle();
                })
                .sheet(isPresented: $showingSettings) { // TODO: Use SettingsView
                    NavigationView {
                        SettingsView()
                        .navigationBarTitle(Text("Settings"), displayMode: .inline)
                        .navigationBarItems(trailing:
                            Button("Done") {
                            self.showingSettings = false
                        })
                    }
                }
            }
        }
    }
}

struct HomeLink : View {
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

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
