//
//  ContentView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 4/18/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import HealthKit
import HealthKitUI

struct MainView: View {
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

#if DEBUG
struct ContentView_Previews :
    PreviewProvider {
    static var previews : some
        View {
        MainView()
    }
}
#endif
