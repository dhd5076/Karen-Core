//
//  KitchenView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/6/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct KitchenView: View {
    var body: some View {
        List {
            NavigationLink(destination: CookbookView()) {
                HStack {
                    Text("📖")
                    Text("Cookbook")
                }
            }
            NavigationLink(destination: ItemListView(navTitle: "Pantry")) {
                HStack {
                    Text("🥫")
                    Text("Pantry")
                }
            }
        }
        .navigationBarTitle("Kitchen")
    }
}

struct KitchenView_Previews: PreviewProvider {
    static var previews: some View {
        KitchenView()
    }
}
