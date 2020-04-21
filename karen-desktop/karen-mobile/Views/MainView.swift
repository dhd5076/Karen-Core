//
//  ContentView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 4/18/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem( {
                    Image(systemName: "house")
                    Text("Home")
            })
            SearchView()
                .tabItem( {
                    Image(systemName: "magnifyingglass")
                    Text("Search")
                })
            QuickView()
                .tabItem( {
                    Image(systemName: "square.grid.2x2")
                    Text("Quick Actions")
            })
        }
    }
}

struct SearchView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("Search")
            }
            .navigationBarTitle(Text("Search"));
        }
    }
}

struct QuickView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("Quick Actions")
            }
            .navigationBarTitle(Text("Quick Actions"));
        }
    }
}

struct HomeLink : View {
    let destination : AnyView
    let color : Color
    let text : String
    
    var body: some View {
        NavigationLink(destination: destination) {
            Text(text)
                .foregroundColor(Color.white)
                .padding(10)
                .font(.system(size: 30))
                .frame(maxWidth: .infinity)
        }
        .background(color)
        .offset(x: 0, y: 0)
        .cornerRadius(12)
    }
}

struct HomeView: View {
    
    @State public var showingSettings = false
    
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 12) {
                Text("Media")
                    .font(.title)
                HomeLink(destination: AnyView(SpotifyView()), color: .green, text: "Spotify")
                Text("Social")
                    .font(.title)
                HomeLink(destination: AnyView(ContactView()), color: .blue, text: "Contacts")
                Text("Automation")
                    .font(.title)
                HomeLink(destination: AnyView(LightingView()), color: .purple, text: "Lighting")
                Text("Health")
                    .font(.title)
                HomeLink(destination: AnyView(SpotifyView()), color: .red, text: "Gym")
            }
            .navigationBarTitle("Home")
            .navigationBarItems(trailing:
                Button("Settings") {
                    self.showingSettings.toggle();
            })
            .sheet(isPresented: $showingSettings) {
                NavigationView {
                    Text("asdads")
                    .navigationBarTitle(Text("Settings"), displayMode: .inline)
                    .navigationBarItems(trailing:
                        Button("Done") {
                        self.showingSettings = false
                    })
                }
            }
        }
        .padding()
    }
}

#if DEBUG
struct ContentView_Previews :
    PreviewProvider {
    static var previews : some
        View {
        ContentView()
    }
}
#endif
